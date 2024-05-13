import { TRating } from '@/types'
import RatingItem from './RatingItem'
import { Dispatch, SetStateAction } from 'react'

const RatingOption = ({
	rating,
	setRating,
}: {
	rating: TRating | undefined
	setRating: Dispatch<SetStateAction<TRating | undefined>>
}) => {
	return (
		<div className="mt-3 border-b-2 border-solid border-green-600 pb-5 pt-2">
			<p className="mb-2 text-xl capitalize">rating</p>
			<div className="flex flex-col gap-4 pl-4">
				<RatingItem
					isChecked={rating === 4}
					onClick={() => {
						if (rating === 4) setRating(undefined)
						else setRating(4)
					}}
					variant="4"
				/>
				<RatingItem
					isChecked={rating === 3}
					onClick={() => {
						if (rating === 3) setRating(undefined)
						else setRating(3)
					}}
					variant="3"
				/>
				<RatingItem
					isChecked={rating === 2}
					onClick={() => {
						if (rating === 2) setRating(undefined)
						else setRating(2)
					}}
					variant="2"
				/>
				<RatingItem
					isChecked={rating === 1}
					onClick={() => {
						if (rating === 1) setRating(undefined)
						else setRating(1)
					}}
					variant="1"
				/>
			</div>
		</div>
	)
}

export default RatingOption
