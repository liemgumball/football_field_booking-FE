import { Dispatch, SetStateAction } from 'react'
import RatingOption from './RatingOption'
import { TRating } from '@/types'

const FilterSection = ({
	rating,
	setRating,
}: {
	rating: TRating | undefined
	setRating: Dispatch<SetStateAction<TRating | undefined>>
}) => {
	return (
		<section>
			<div>
				<h4 className="mt-6 text-xl font-bold md:text-2xl lg:text-3xl">
					Filter
				</h4>
				<RatingOption rating={rating} setRating={setRating} />
			</div>
		</section>
	)
}

export default FilterSection
