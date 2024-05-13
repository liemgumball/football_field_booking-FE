import defaultImg from '/booking_img.png'
import { TFootballField } from '@/types'
import { StarIcon } from 'lucide-react'

const FieldCard = ({
	name,
	// images,
	rating,
}: Pick<TFootballField, 'images' | 'name' | 'rating'>) => {
	return (
		<div className="relative max-h-[227px] overflow-hidden">
			<div className="max-w-max opacity-55">
				<img
					width={300}
					className="rounded"
					src={defaultImg}
					alt="image field"
				/>
			</div>
			<div className="absolute right-5 top-5 flex gap-2 rounded bg-primary p-2">
				<p> {rating || 'No'} </p>
				<StarIcon />
			</div>
			<div className="absolute left-0 top-28 flex max-h-80 w-full items-end px-5 pb-5 pt-4">
				<h3 className="text-xl font-bold">{name}</h3>
			</div>
		</div>
	)
}

export default FieldCard
