import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { TFootballField } from '@/types'
import { cn } from '@/lib/utils'
import defaultImg from '/booking_img.png'
import Rating from '@/components/Rating'

const FootballFieldCard = ({
	_id,
	name,
	rating,
	images,
	className,
	sizeIcon,
}: Partial<TFootballField> & { className?: string } & {
	sizeIcon?: number
}) => {
	const imgSrc = images?.length ? images[0] : defaultImg // just fallback cause the api already get fields with images

	return (
		<Link to={`/fields/${_id}`} className="w-full">
			<figure
				className={cn(
					'group relative h-[480px] w-full overflow-hidden rounded-lg',
					className,
				)}
			>
				<img
					src={imgSrc}
					alt="field image"
					className="h-full w-full object-cover"
				/>

				<figcaption className="absolute bottom-4 left-8 right-8">
					<Card title={name} className="py-2">
						<CardHeader className="flex justify-between gap-2">
							<CardTitle className="truncate text-sm hover:text-wrap">
								<p className="transition">{name}</p>
							</CardTitle>
							<CardDescription className="flex space-x-1">
								{rating ? (
									<Rating rating={rating} size={sizeIcon} />
								) : (
									<Rating rating={0} size={sizeIcon} />
								)}
							</CardDescription>
						</CardHeader>
						<CardContent className="h-auto max-h-0 overflow-hidden py-0 opacity-0 transition-all delay-100 duration-700 group-hover:mb-4 group-hover:max-h-[90px] group-hover:opacity-100">
							<p className="text-xs text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
						</CardContent>
					</Card>
				</figcaption>
			</figure>
		</Link>
	)
}

export default FootballFieldCard
