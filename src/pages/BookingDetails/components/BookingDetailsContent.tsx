import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { createCheckoutSession } from '@/services/booking'
import useAuthStore from '@/stores/auth'
import { TBooking } from '@/types'
import { formatPrice } from '@/utils/booking'
import { format } from 'date-fns'

type TProps = Omit<TBooking, 'field'>

const BookingDetailsContent = (props: TProps) => {
	const {
		subfield,
		price,
		from,
		to,
		date,
		name: userName,
		_id,
		createdAt,
		description,
		paid,
	} = props

	const user = useAuthStore((set) => set.user)

	if (!user) throw new Error('User not found')

	const onClick = async () => {
		try {
			const { checkoutUrl } = await createCheckoutSession(_id)

			window.location.href = checkoutUrl
		} catch (err) {
			toast({
				title: 'Error while creating checkout session',
				variant: 'destructive',
			})
		}
	}

	return (
		<section className="mt-6 flex flex-col gap-y-6 px-12 py-4">
			<div className="space-y-2">
				<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
					Booking details
				</h2>
				<p>
					Size: <span>{subfield.size}</span>
				</p>
				<p>
					Time:{' '}
					<span>
						{from} - {to}
					</span>
				</p>
				<p>
					Price: <span>{formatPrice(price)}</span>
				</p>
				<p>
					Booking date: <span>{format(date, 'PPP')}</span>
				</p>
			</div>
			<div className="space-y-2">
				<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
					Booking By
				</h2>

				<p>
					Name:{' '}
					{userName || (
						<span className="text-muted-foreground">No provided</span>
					)}
				</p>
				<p>Email: {user.email}</p>
				<p>Phone: {user.phoneNumber}</p>
				<p>Booking ID: {_id}</p>
				{createdAt && <p>Created At: {format(createdAt, 'PPP')}</p>}
			</div>

			<div className="space-y-2">
				<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
					Additional information
				</h2>

				<p>Extra services: __________ </p>
				<p>
					Description:
					<Textarea value={description} className="mt-2" />
				</p>
			</div>

			{!paid && (
				<div className="container max-w-min">
					{' '}
					<Button onClick={onClick}>Checkout</Button>
				</div>
			)}
		</section>
	)
}

export default BookingDetailsContent
