import { Separator } from '@/components/ui/separator'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { TLocation } from '@/types'

const TitleDetails = ({
	name,
	location,
}: {
	name: string | undefined
	location: TLocation | undefined
}) => {
	return (
		<section>
			<div className="text-start">
				<h1 className="text-2xl font-bold">{name}</h1>
				<p>{location?.name}</p>
				<span>Price: $96.99</span>
			</div>
			<Separator />
			<div className="my-3 flex justify-between">
				<div className="flex gap-2">
					<Star />
					<Star />
					<p>(3k Reviewers)</p>
				</div>
				<div className="flex gap-4">
					<p className={cn(buttonVariants({ size: 'lg' }), 'max-w-max')}>
						Share
					</p>
					<p className={cn(buttonVariants({ size: 'lg' }), 'max-w-max')}>
						Reviews
					</p>
					<p className={cn(buttonVariants({ size: 'lg' }), 'max-w-max')}>
						Whislist
					</p>
				</div>
			</div>
			<Separator />
		</section>
	)
}

export default TitleDetails
