import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TFootballField } from '@/types'

const FootballFieldCard = ({
	_id,
	name,
	rating,
	images,
}: Partial<TFootballField> & { className?: string }) => {
	const imgSrc = images?.length
		? images[0]
		: 'https://demo.webtend.net/html/gowilds/assets/images/features/feat-2.jpg' // just fallback cause the api already get fields with images

	return (
		<Link to={`/fields/${_id}`}>
			<figure className="group relative h-[480px] w-full overflow-hidden rounded-lg">
				<img
					src={imgSrc}
					alt="field image"
					className="h-full w-full object-cover"
				/>

				<figcaption className="absolute bottom-4 left-8 right-8">
					<Card className="p-2">
						<CardHeader className="flex justify-between gap-2">
							<CardTitle className="truncate text-base">
								<p className="transition">{name}</p>
							</CardTitle>
							<CardDescription className="flex space-x-1">
								{rating
									? Array.from({ length: rating }, (_, i) => i).map((item) => (
											<Star key={item} size={15} color="orange" />
										))
									: 'No rating'}
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
