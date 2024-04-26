import { cn } from '@/lib/utils'
import { TBookingStatus, TFootballField } from '@/types'
import { MapPinIcon, StarIcon } from 'lucide-react'

type TProps = {
	field: TFootballField
	status: TBookingStatus
}

const BookingDetailsHeader = ({ field, status }: TProps) => {
	const { name, rating, location } = field

	const statusClassName: Record<TBookingStatus, string> = {
		confirmed: 'bg-primary',
		canceled: 'bg-muted-foreground',
		pending: 'bg-secondary normal-case',
	}

	return (
		<header className="flex items-center justify-between py-4">
			<div className="space-y-4">
				<h2 className="text-4xl font-bold">{name}</h2>
				<div className="space-x-2">
					<MapPinIcon className="mr-1 inline-block text-primary" size={20} />
					<span>{location.name}</span>
					<span className="space-x-1">
						{rating ? (
							Array.from({ length: Math.round(rating) }, (_, i) => i).map(
								(i) => (
									<StarIcon
										className="inline-block"
										key={i}
										size={16}
										color="orange"
									/>
								),
							)
						) : (
							<span className="text-muted-foreground">No rating</span>
						)}
					</span>
				</div>
			</div>
			<div
				className={cn(
					'inline-flex items-center rounded-lg border px-2.5 py-0.5 text-lg font-semibold capitalize',
					statusClassName[status],
				)}
			>
				{status === 'pending' ? 'Waiting for confirm' : status}
			</div>
		</header>
	)
}

export default BookingDetailsHeader
