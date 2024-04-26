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
		<header className="flex flex-col justify-between gap-x-2 gap-y-4 py-4 md:flex-row md:items-center">
			<div className="space-y-4">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					{name}
				</h1>
				<div className="space-x-2">
					<MapPinIcon
						className="mr-px inline-block text-nowrap text-primary"
						size={20}
					/>
					<span className="truncate">{location.name}</span>
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
							<span className="text-nowrap text-muted-foreground">
								No rating
							</span>
						)}
					</span>
				</div>
			</div>
			<div
				className={cn(
					'inline-flex min-w-max max-w-max items-center rounded-xl border px-3 py-0.5 text-lg font-semibold capitalize',
					statusClassName[status],
				)}
			>
				{status === 'pending' ? 'Waiting for confirming' : status}
			</div>
		</header>
	)
}

export default BookingDetailsHeader
