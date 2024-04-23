import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useAuthStore from '@/stores/auth'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
	convertToTimeFormat,
	getInitialFrom,
	getInitialTo,
} from '@/utils/booking'
import { Textarea } from '@/components/ui/textarea'
import { Button, buttonVariants } from '@/components/ui/button'
import { createBooking } from '@/services/booking'
import { useToast } from '@/components/ui/use-toast'
import { format } from 'date-fns'
import { ToastAction } from '@/components/ui/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TBooking, TTurnOfServiceStatus } from '@/types'

type TProps = {
	subfieldId: string
	date: string | Date
	price: number
	id: string
	from: string
	to: string
	status?: TTurnOfServiceStatus
}

const BookingDetailsForm = ({
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

	const formSchema = z.object({
		name: z.string().min(1, 'Name cannot be empty'),
		from: z.string().min(4, 'Invalid time format'),
		to: z.string().min(4, 'Invalid time format'),
		additionalServices: z.any().optional(), // radio group
		description: z.string().optional(),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: user?.name || '',
			from: searchParams.get('from') || getInitialFrom(),
			to: getInitialTo(searchParams.get('from') || undefined),
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
				from: convertToTimeFormat(values.from),
				to: convertToTimeFormat(values.to),
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
		// TODO handle logged in before booking
		try {
			const response = await mutation.mutateAsync(values)

			if (response) {
				toast({
					title: 'Book successfully',
					description: `${format(response.date, 'PPP')} from ${response.from} to ${response.to}`,
					action: (
						<ToastAction
							className={buttonVariants()}
							altText="Booking details"
							onClick={() => navigate('#')}
						>
							Details
						</ToastAction>
					),
				})
			}
		} catch (error) {
			const res = error as Response
			toast({
				title: 'Booking failed',
				description: `Field from ${convertToTimeFormat(from)} to ${convertToTimeFormat(to)} is ${res.status === 412 ? 'being booked by another user' : 'not available'}`,
				variant: 'destructive',
			})
		}
	}

	return (
		<Form {...form}>
			<form
				className="grid grid-cols-1 gap-y-5 md:grid-cols-2"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Enter your name" {...field} />
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
							<FormControl>
								<InputOTP maxLength={4} {...field}>
									<InputOTPGroup>
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
									</InputOTPGroup>
									<InputOTPSeparator />
									<InputOTPGroup>
										<InputOTPSlot index={2} />
										<InputOTPSlot index={3} />
									</InputOTPGroup>
								</InputOTP>
							</FormControl>
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
							<FormControl>
								<InputOTP maxLength={4} {...field}>
									<InputOTPGroup>
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
									</InputOTPGroup>
									<InputOTPSeparator />
									<InputOTPGroup>
										<InputOTPSlot index={2} />
										<InputOTPSlot index={3} />
									</InputOTPGroup>
								</InputOTP>
							</FormControl>
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
					{form.formState.isSubmitting
						? 'Booking...'
						: status === 'available'
							? 'Booking Now'
							: 'Not available'}
				</Button>
			</form>
		</Form>
	)
}

export default BookingDetailsForm