import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

// Components
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import TimeSelect from '@/components/TimeSelect'
import { Textarea } from '@/components/ui/textarea'
import { Button, buttonVariants } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { SelectTrigger, SelectValue } from '@/components/ui/select'

// Store & Constants & Types
import useAuthStore from '@/stores/auth'
import { TBooking, TTurnOfServiceStatus } from '@/types'
import { timeSchema } from '@/constants/time'

// Utils
import { getDuration } from '@/utils/time'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import { createBooking } from '@/services/booking'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/Icons'
import { ToastAction } from '@/components/ui/toast'

type TProps = {
	subfieldId: string
	date: string | Date
	price: number
	id: string
	from: string
	to: string
	status?: TTurnOfServiceStatus
}

const AvailableBookingForm = ({
	date,
	subfieldId,
	price,
	id,
	from,
	to,
	status,
}: TProps) => {
	const [searchParams] = useSearchParams()
	const { toast } = useToast()
	const navigate = useNavigate()
	const user = useAuthStore((set) => set.user)
	const queryClient = useQueryClient()

	const formSchema = z
		.object({
			name: z.string().min(1, 'Name cannot be empty'),
			from: timeSchema,
			to: timeSchema,
			additionalServices: z.any().optional(), // radio group
			description: z.string().optional(),
		})
		.refine(({ from, to }) => getDuration(from, to) >= 1, {
			message: 'To must after From as least 1 hour',
			path: ['to'],
		})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: user?.name || '',
			from: searchParams.get('from') || getInitialFrom(),
			to:
				searchParams.get('to') ||
				getInitialTo(searchParams.get('from') || undefined),
		},
	})

	const mutation = useMutation<
		TBooking,
		Error,
		z.infer<typeof formSchema>,
		unknown
	>({
		mutationFn: (values) =>
			createBooking({
				...values,
				from: values.from,
				to: values.to,
				userId: user?._id || '',
				subfieldId: subfieldId,
				date: date,
				price: price,
			}),
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: [id, from, to] }),
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		if (!user)
			return toast({
				title: 'You need to login before book!',
				action: (
					<ToastAction
						className={buttonVariants({})}
						altText="To login page"
						onClick={() => navigate('/login')}
					>
						Login
					</ToastAction>
				),
			})

		try {
			const response = await mutation.mutateAsync(values)

			if (response) {
				// Display the notification
				toast({
					title: 'Book successfully',
					description: `${format(response.date, 'PPP')} from ${response.from} to ${response.to}`,
				})

				setTimeout(() => navigate(`/bookings/${response._id}`), 1000)
			}
		} catch (error) {
			const res = error as Response
			const resMsg =
				res.status === 400
					? JSON.parse(await res.text())[0].message
					: `Field from ${form.getValues('from')} to ${form.getValues('to')} is being booked by another.`

			toast({
				title: 'Booking Failed!',
				description: resMsg,
				variant: 'destructive',
			})
		}
	}

	return (
		<Form {...form}>
			<form
				className="grid grid-cols-1 gap-x-16 gap-y-5 md:grid-cols-2"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									className="px-4 py-6"
									placeholder="Enter your name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="from"
					render={({ field }) => (
						<FormItem>
							<FormLabel>From</FormLabel>
							<TimeSelect
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger
										className={cn(
											'px-8',
											!field.value && 'text-muted-foreground',
										)}
									>
										<SelectValue placeholder="Select time from" />
									</SelectTrigger>
								</FormControl>
							</TimeSelect>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="to"
					render={({ field }) => (
						<FormItem>
							<FormLabel>To</FormLabel>
							<TimeSelect
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger
										className={cn(
											'px-8',
											!field.value && 'text-muted-foreground',
										)}
									>
										<SelectValue placeholder="Select time from" />
									</SelectTrigger>
								</FormControl>
							</TimeSelect>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea placeholder="Enter your description" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className="mx-auto mt-2 max-w-min capitalize md:col-span-2"
					variant={status !== 'available' ? 'outline' : 'default'}
					type="submit"
					disabled={form.formState.isSubmitting || status !== 'available'}
				>
					{form.formState.isSubmitting ? (
						<>
							<Icons.Loader className="mr-1 text-secondary" />
							Booking...
						</>
					) : status === 'available' ? (
						'Booking Now'
					) : (
						'Not available'
					)}
				</Button>
			</form>
		</Form>
	)
}

export default AvailableBookingForm
