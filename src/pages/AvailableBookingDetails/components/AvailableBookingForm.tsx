import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { StatusCodes } from 'http-status-codes'

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
import { Icons } from '@/components/Icons'
import { ToastAction } from '@/components/ui/toast'
import { useAvailableBookingMutation } from '../hooks/useAvailableBookingMutation'

// Store & Constants & Types
import useAuthStore from '@/stores/auth'

// Utils
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { TAvailableBooking } from '@/types'
import useAvailableBookingStore from '@/stores/availableBooking'
import {
	availableFormSchema,
	useAvailableBookingForm,
} from '../hooks/useAvailableBookingForm'

type TProps = {
	availableBooking: TAvailableBooking
}

const AvailableBookingForm = ({ availableBooking }: TProps) => {
	// available booking as props
	const { dayOfService, from, to, price, status } = availableBooking
	const { toast } = useToast()
	const navigate = useNavigate()
	const user = useAuthStore((set) => set.user)

	// Onchange time range
	const updateTimeRange = useAvailableBookingStore(
		(store) => store.updateTimeRange,
	)

	// Form validation
	const form = useAvailableBookingForm(from, to)

	// Mutation
	const { mutateAsync } = useAvailableBookingMutation(
		dayOfService._id,
		dayOfService.subfield._id,
		dayOfService.date,
		price,
	)

	/**
	 * Create a new booking and update new data after fetch
	 * @param values Values of form
	 */
	const onSubmit: SubmitHandler<z.infer<typeof availableFormSchema>> = async (
		values,
	) => {
		// Login before booking
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
			const response = await mutateAsync(values)

			if (response) {
				// Display the notification
				toast({
					title: 'Book successfully!',
					variant: 'primary',
					description: `${format(response.date, 'PPP')} from ${response.from} to ${response.to}`,
				})

				setTimeout(
					() => navigate(`/bookings/${response._id}`, { replace: true }),
					1200,
				)
			}
		} catch (error) {
			const res = error as Response
			const resMsg =
				res.status === StatusCodes.BAD_REQUEST
					? JSON.parse(await res.text())[0].message // get message from BE zod validate response
					: res.status === StatusCodes.PRECONDITION_FAILED
						? `Field from ${form.getValues('from')} to ${form.getValues('to')} is being booked by another.`
						: await res.text()

			toast({
				title: 'Booking Failed!',
				variant: 'destructive',
				description: resMsg,
			})
		}
	}

	// state for submitting
	const { isSubmitting } = form.formState

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
								onValueChange={(value: string) => {
									updateTimeRange(value)
									field.onChange(value)
								}}
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
								onValueChange={(value: string) => {
									updateTimeRange(undefined, value)
									field.onChange(value)
								}}
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
					disabled={isSubmitting || status !== 'available'}
				>
					{isSubmitting ? (
						<>
							<Icons.Loader className="mr-1 text-secondary" />
							Booking...
						</>
					) : status === 'available' ? (
						'Book Now'
					) : (
						'Not available'
					)}
				</Button>
			</form>
		</Form>
	)
}

export default AvailableBookingForm
