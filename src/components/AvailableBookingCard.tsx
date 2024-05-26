import { TDayOfService } from '@/types'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'

import defaultImg from '/booking_img.png'
import {
	ArrowRight,
	DollarSignIcon,
	MapPin,
	Star,
	User2Icon,
} from 'lucide-react'
import { format } from 'date-fns'
import { Separator } from '@/components/ui/separator'
import { buttonVariants } from '@/components/ui/button'
import { memo, useState } from 'react'
import { getFieldDetails } from '@/services/football-field'
import { Link } from 'react-router-dom'
import { getTimeRange } from '@/utils/time'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { PATHS } from '@/constants/navigation'
import { calculatePrice } from '@/utils/booking'

const AvailableBookingCard = ({
	_id,
	field,
	date,
	subfield,
	turnOfServices,
}: TDayOfService) => {
	const [location, setLocation] = useState<string>()

	const imgSrc = subfield.image || defaultImg

	const price = calculatePrice(turnOfServices)

	const [from, to] = getTimeRange(turnOfServices)

	// Hover to display the location
	const onMouseEnter = async () => {
		try {
			const fieldDetails = await getFieldDetails(field._id)

			if (fieldDetails) setLocation(fieldDetails.location?.name)
		} catch (error) {
			setLocation((error as Error).message)
		}
	}

	return (
		<Card className="group flex h-full w-[320px] flex-col justify-between md:w-[380px]">
			<AspectRatio
				ratio={416 / 314}
				className="overflow-hidden truncate rounded-t-lg p-0"
				title={field.name}
			>
				<img
					className="h-full object-cover transition-all delay-200 duration-500"
					width={390}
					height={300}
					src={imgSrc}
					alt="field image"
				/>
			</AspectRatio>
			<CardHeader className="space-y-1 pb-4">
				<div className="space-x-1 text-sm text-muted-foreground">
					{field.rating
						? // Array of start icon
							Array.from({ length: field.rating }, (_, i) => i).map((i) => (
								<Star size={16} color="orange" className="inline" key={i} />
							))
						: 'No rating'}
					{field.rating ? <span>({field.rating})</span> : ''}
				</div>
				<CardTitle className="text-wrap capitalize">
					<Link
						to={`${PATHS.FIELD.BASE}/${field._id}`}
						className="leading-tight transition hover:text-primary"
					>
						{field.name} - {subfield.name}
					</Link>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-wrap items-center gap-2">
				<HoverCard>
					<HoverCardTrigger
						className="cursor-default text-nowrap rounded-md border p-2 hover:bg-muted"
						onMouseEnter={onMouseEnter}
					>
						<MapPin className="mr-2 inline text-primary" size={16} />
						{format(date, 'PPP')}
					</HoverCardTrigger>
					{location && <HoverCardContent>{location}</HoverCardContent>}
				</HoverCard>
				<div className="text-nowrap px-2 text-lg font-bold tracking-wider text-secondary-foreground">{`${from} - ${to}`}</div>
			</CardContent>
			<Separator className="mx-auto mb-4 w-5/6" />
			<CardFooter className="flex justify-between text-sm text-secondary-foreground">
				<div>
					<DollarSignIcon className="mr-2 inline text-primary" size={18} />
					{price}
					<User2Icon className="ml-8 mr-2 inline text-primary" size={18} />
					{subfield.size}
				</div>
				<Link
					to={`${PATHS.AVAILABLE_BOOKING.BASE}/${_id}?from=${from}&to=${to}`}
					className={buttonVariants({})}
				>
					Booking
					<ArrowRight className="ml-2" size={16} />
				</Link>
			</CardFooter>
		</Card>
	)
}

export default memo(AvailableBookingCard)
