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

const FootballFieldCard = ({ name, rating }: Omit<TFootballField, '_id'>) => {
	return (
		<figure className="group relative overflow-hidden rounded-lg">
			<div className="h-full w-full">
				<img
					src="https://demo.webtend.net/html/gowilds/assets/images/features/feat-2.jpg"
					alt="demo"
				/>
			</div>
			<figcaption className="absolute bottom-4 left-8 right-8">
				<Card className="p-4">
					<CardHeader className="flex justify-between">
						<CardTitle className="max-w-fit">{name}</CardTitle>
						<CardDescription className="flex max-w-fit space-x-1">
							{Array.from({ length: rating }, (_, i) => i).map((item) => (
								<Star key={item} size={15} color="orange" />
							))}
						</CardDescription>
					</CardHeader>
					<CardContent className="h-auto max-h-0 overflow-hidden py-0 opacity-0 transition-all delay-100 duration-700 group-hover:mb-4 group-hover:max-h-[90px] group-hover:opacity-100">
						<p className="text-sm text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						</p>
					</CardContent>
					<Link
						to="#"
						className={cn(
							buttonVariants({ size: 'icon' }),
							'absolute right-10 top-16 rounded-full',
						)}
					>
						<ArrowBigRight />
					</Link>
				</Card>
			</figcaption>
		</figure>
	)
}

export default FootballFieldCard
