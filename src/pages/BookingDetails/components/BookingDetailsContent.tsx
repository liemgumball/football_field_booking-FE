import { Textarea } from '@/components/ui/textarea'
import useAuthStore from '@/stores/auth'
import { TBooking } from '@/types'
import { formatPrice } from '@/utils/booking'
import { format } from 'date-fns'
import BookingDetailsActions from './BookingDetailsActions'

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
		status,
	} = props

	const user = useAuthStore((set) => set.user)

	if (!user) throw new Error('User not found')

	return (
		<section className="mt-6 flex flex-col gap-y-6 py-4 md:px-12">
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

				<p>
					Extra services:{' '}
					<i className="text-sm text-muted-foreground">(feature in future)</i>{' '}
				</p>
				<p>
					Description:
					<Textarea
						value={description || 'No description'}
						className={`mt-2 focus-visible:outline-0 focus-visible:ring-0 ${!description && 'text-sm text-muted-foreground'}`}
						readOnly
					/>
				</p>
			</div>
			<BookingDetailsActions _id={_id} status={status} />
		</section>
	)
}

export default BookingDetailsContent
