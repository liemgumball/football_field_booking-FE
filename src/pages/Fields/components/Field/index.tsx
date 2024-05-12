import defaultImg from '/booking_img.png'
import { TFootballField } from '@/types'
import { StarIcon } from 'lucide-react'

const FieldCard = ({
	name,
	images,
	rating,
}: Pick<TFootballField, 'images' | 'name' | 'rating'>) => {
	return (
		<div className="relative overflow-hidden">
			<div className="max-h-80 max-w-max opacity-55">
				<img
					width={395}
					height={500}
					className="rounded"
					src={images?.length ? images[0] : defaultImg}
					alt="image field"
				/>
			</div>
			<div className="absolute right-5 top-5 flex gap-2 rounded bg-primary p-2">
				<p> {rating || 'No'} </p>
				<StarIcon />
			</div>
			<div className="absolute left-0 top-0 flex h-full w-full items-end px-7 py-6">
				<h3 className="text-xl font-bold">{name}</h3>
			</div>
		</div>
	)
}

export default FieldCard
