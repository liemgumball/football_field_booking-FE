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
} from './ui/form'
import { Input } from './ui/input'
import useAuthStore from '@/stores/auth'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from './ui/input-otp'
import { useSearchParams } from 'react-router-dom'
import {
	convertToTimeFormat,
	getInitialFrom,
	getInitialTo,
} from '@/utils/booking'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { createBooking } from '@/services/booking'

type TProps = {
	subfieldId: string
	date: string | Date
	price: number
}

const BookingDetailsForm = ({ date, subfieldId, price }: TProps) => {
	const [searchParams] = useSearchParams()

	const formSchema = z.object({
		name: z.string().min(1, 'Name cannot be empty'),
		from: z.string().min(4, 'Invalid time format'),
		to: z.string().min(4, 'Invalid time format'),
		additionalServices: z.any().optional(), // radio group
		description: z.string().optional(),
	})

	const user = useAuthStore((set) => set.user)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: user?.name || '',
			from: searchParams.get('from') || getInitialFrom(),
			to: getInitialTo(searchParams.get('from') || undefined),
		},
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		// TODO handle logged in before booking
		try {
			const response = await createBooking({
				...values,
				from: convertToTimeFormat(values.from),
				to: convertToTimeFormat(values.to),
				userId: user?._id || '',
				subfieldId: subfieldId,
				date: date,
				price: price,
			})

			if (response) {
				//TODO handle successful response
			}
		} catch (error) {
			const errorMessage = (error as Error).message

			if (errorMessage === '412') {
				// TODO handle booking error cause it's already booked by another user
			}
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
					type="submit"
				>
					{user ? 'Booking Now' : 'Login for Booking'}
				</Button>
			</form>
		</Form>
	)
}

export default BookingDetailsForm
