import { Separator } from '@/components/ui/separator'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TFootballField } from '@/types'
import Rating from '@/components/Rating'

const TitleFieldDetails = ({
	name,
	location,
	rating,
}: Partial<TFootballField>) => {
	return (
		<section>
			<div className="pb-8 text-start">
				<h1 className="mb-3 text-4xl font-bold">{name}</h1>
				<p className="flex gap-1 font-normal">
					<MapPin className="text-primary" />
					{location?.name}
				</p>
			</div>
			<Separator />
			<div className="my-3 flex flex-col justify-between gap-y-2 lg:flex-row">
				<div className="flex items-center gap-2">
					{rating ? <Rating rating={rating} /> : <Rating rating={0} />}
					<p>({rating ? rating : 'No rating'})</p>
				</div>
				<div className="flex gap-4 uppercase">
					<Button className="max-w-max rounded-3xl" size="lg" disabled>
						Like
					</Button>
					<Button className="max-w-max rounded-3xl" size="lg" disabled>
						Reviews
					</Button>
				</div>
			</div>
			<Separator />
		</section>
	)
}

export default TitleFieldDetails
