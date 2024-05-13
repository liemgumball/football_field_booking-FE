import { Clock, DollarSign, MapPin, Star, User2Icon } from 'lucide-react'
import { format } from 'date-fns'
import BookingStatusBadge from '@/components/BookingStatusBadge'
import { formatPrice } from '@/utils/booking'
import { TAvailableBooking } from '@/types'

const AvailableBookingHeader = (props: {
	availableBooking: TAvailableBooking
}) => {
	const { status, price, duration, dayOfService } = props.availableBooking

	const { field, date, subfield } = dayOfService
	return (
		<header className="my-12 flex flex-col justify-between gap-y-4 px-12 xl:flex-row">
			<div>
				<h3 className="text-4xl font-bold capitalize">
					{field.name || 'Football Field'}
				</h3>
				<div className="space-x-1">
					{date ? format(date, 'PPP') : ''}
					{' - '}
					{field.rating
						? Array.from({ length: field.rating }, (_, i) => i).map((i) => (
								<Star
									className="inline-block"
									key={i}
									color="orange"
									size={16}
								/>
							))
						: 'No rating'}
				</div>
				<div className="mt-2 text-sm text-muted-foreground">
					<MapPin size={14} className="mr-1 inline-block text-primary" />
					{field.location.name}
					{status && (
						<BookingStatusBadge status={status} className="ml-2 text-xs" />
					)}
				</div>
			</div>
			<div className="my-auto flex min-w-max justify-between gap-6">
				<div>
					<p>
						<DollarSign size={18} className="mr-1 inline-block text-primary" />
						Price
					</p>
					<p className="text-xl font-bold">{formatPrice(price || 0)}</p>
				</div>
				<div>
					<p>
						<Clock size={18} className="mr-1 inline-block text-primary" />
						Duration
					</p>
					<p className="text-xl font-bold">{duration} Hours</p>
				</div>
				<div>
					<p>
						<User2Icon size={18} className="mr-1 inline-block text-primary" />
						Size
					</p>
					<p className="text-xl font-bold">
						{subfield.size + ' People' || 'Unknown'}
					</p>
				</div>
			</div>
		</header>
	)
}

export default AvailableBookingHeader
