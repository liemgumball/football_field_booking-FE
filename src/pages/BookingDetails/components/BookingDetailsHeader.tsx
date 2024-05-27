import { cn } from '@/lib/utils'
import { TBookingStatus, TFootballField, TSubField } from '@/types'
import { MapPinIcon } from 'lucide-react'
import BookingQRCode from './BookingQRCode'
import Rating from '@/components/Rating'

type TProps = {
	_id: string
	field: TFootballField
	status: TBookingStatus
	subfield: TSubField
}

const BookingDetailsHeader = ({ field, status, _id, subfield }: TProps) => {
	const { name, rating, location } = field

	const statusClassName: Record<TBookingStatus, string> = {
		confirmed: 'bg-primary',
		canceled: 'bg-muted-foreground',
		pending: 'bg-secondary normal-case',
	}

	return (
		<header className="flex flex-col justify-between gap-x-2 gap-y-4 py-4 md:flex-row md:items-center">
			<div className="space-y-4">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					{name} {subfield.name}
				</h1>
				<div className="space-x-2 text-nowrap">
					<MapPinIcon className="mr-px inline-block text-primary" size={20} />
					<span className="truncate text-wrap align-middle">
						{location.name}
					</span>
					<span className="inline-block space-x-1  align-middle">
						{rating ? (
							<div className="flex">
								<Rating rating={rating} size={17} />
							</div>
						) : (
							<div className="flex">
								<Rating rating={0} size={17} />
							</div>
						)}
					</span>
				</div>
			</div>
			<div className="flex gap-2">
				<div
					className={cn(
						'inline-flex min-w-max max-w-max items-center rounded-full border px-3 py-0.5 text-lg font-semibold capitalize',
						statusClassName[status],
					)}
				>
					{status === 'pending' ? 'Waiting for confirming' : status}
				</div>
				{status === 'confirmed' && <BookingQRCode _id={_id} />}
			</div>
		</header>
	)
}

export default BookingDetailsHeader
