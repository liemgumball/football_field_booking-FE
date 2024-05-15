import { PATHS } from '@/constants/navigation'
import defaultImg from '/booking_img.png'
import { TFootballField } from '@/types'
import { StarIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Field = ({ name, images, rating, _id }: Partial<TFootballField>) => {
	return (
		<li className="relative h-[227px] w-full max-w-max overflow-hidden rounded">
			<Link to={`${PATHS.FIELD.BASE}/${_id}`}>
				<div className="h-full w-full max-w-max opacity-80">
					<img
						width={300}
						className="h-full object-cover"
						src={images?.length ? images[0] : defaultImg}
						alt="image field"
					/>
				</div>
				<div className="absolute right-5 top-5 flex gap-2 rounded bg-primary p-2 md:right-4 lg:right-5 lg:top-5">
					<p> {rating || 'No'} </p>
					<StarIcon />
				</div>
				<div className="absolute left-0 top-28 flex max-h-80  items-end px-5 pb-5 pt-4">
					<h3 className="text-base font-bold md:text-lg lg:text-xl">{name}</h3>
				</div>
			</Link>
		</li>
	)
}

export default Field
