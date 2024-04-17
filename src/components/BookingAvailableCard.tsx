import { TFootballField, TSubField, TTurnOfService } from '@/types'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

import defaultImg from '/booking_img.png'
import {
	ArrowRight,
	DollarSignIcon,
	MapPin,
	Star,
	User2Icon,
} from 'lucide-react'
import { format } from 'date-fns'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { memo, useState } from 'react'
import { getFieldDetails } from '@/services/football-field'
import useCartStore from '@/stores/cart'
import { useNavigate } from 'react-router-dom'

const BookingAvailableCard = ({
	at,
	price,
	field,
	date,
	subfield,
}: TTurnOfService & { date: string | Date } & {
	field: TFootballField
	subfield: TSubField
}) => {
	const setCart = useCartStore((set) => set.set)
	const navigate = useNavigate()
	const [location, setLocation] = useState<string>()

	const onMouseEnter = async () => {
		try {
			const fieldDetails = await getFieldDetails(field._id)

			if (fieldDetails) setLocation(fieldDetails.location?.name)
		} catch (error) {
			setLocation((error as Error).message)
		}
	}

	const onClick = () => {
		setCart({
			date: date,
			from: at,
			to: at,
			price: price,
			subfieldId: subfield._id,
		})

		navigate('/checkout')
	}

	return (
		<Card className="group h-full min-w-min max-w-max">
			<div
				className="min-h-[300px] overflow-hidden rounded-t-lg p-0"
				title={field.name}
			>
				<img
					className="transition-all duration-500 group-hover:scale-105"
					src={field.images?.at(0) || defaultImg}
					alt="field image"
				/>
			</div>
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
				<CardTitle className="truncate">{field.name}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>
					<HoverCard>
						<HoverCardTrigger
							className="cursor-default rounded-md border p-2"
							onMouseEnter={onMouseEnter}
						>
							<MapPin className="mr-2 inline text-primary" size={16} />
							{format(date, 'PPP')} {at}
						</HoverCardTrigger>
						{location && <HoverCardContent>{location}</HoverCardContent>}
					</HoverCard>
				</CardDescription>
			</CardContent>
			<Separator className="mx-auto mb-4 w-5/6" />
			<CardFooter className="space-x-6 text-sm text-secondary-foreground">
				<div className="flex items-center">
					<DollarSignIcon className="mr-2 text-primary" size={18} />
					Price {price}
				</div>
				<div className="flex items-center">
					<User2Icon className="mr-2 text-primary" size={18} />
					Size {subfield.size}
				</div>
				<Button variant="outline" onClick={onClick}>
					Booking
					<ArrowRight className="ml-2" size={16} />
				</Button>
			</CardFooter>
		</Card>
	)
}

export default memo(BookingAvailableCard)
