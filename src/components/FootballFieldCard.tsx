import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ArrowBigRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TFootballField } from '@/types'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

const FootballFieldCard = ({
	_id,
	name,
	rating,
	images,
}: Partial<TFootballField>) => {
	const imgSrc = images?.length
		? images[0]
		: 'https://demo.webtend.net/html/gowilds/assets/images/features/feat-2.jpg' // just fallback cause the api already get fields with images

	return (
		<figure className="group relative h-[480px] w-[400px] overflow-hidden rounded-lg">
			<img
				src={imgSrc}
				alt="field image"
				className="h-full w-full object-cover"
			/>

			<figcaption className="absolute bottom-4 left-8 right-8">
				<Card className="p-4">
					<CardHeader className="flex justify-between gap-2">
						<CardTitle className="max-w-fit truncate">{name}</CardTitle>
						<CardDescription className="flex max-w-fit space-x-1">
							{rating
								? Array.from({ length: rating }, (_, i) => i).map((item) => (
										<Star key={item} size={15} color="orange" />
									))
								: 'No rating'}
						</CardDescription>
					</CardHeader>
					<CardContent className="h-auto max-h-0 overflow-hidden py-0 opacity-0 transition-all delay-100 duration-700 group-hover:mb-4 group-hover:max-h-[90px] group-hover:opacity-100">
						<p className="text-sm text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						</p>
					</CardContent>
					<Link to={`/fields/${_id}`}>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger
									className={cn(
										buttonVariants({ size: 'icon' }),
										'absolute right-10 top-16 my-2 rounded-full',
									)}
								>
									<ArrowBigRight />
								</TooltipTrigger>
								<TooltipContent>
									<p className="font-semibold">Check Now</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</Link>
				</Card>
			</figcaption>
		</figure>
	)
}

export default FootballFieldCard
