import { Dispatch, SetStateAction } from 'react'
import RatingOption from './RatingOption'
import { TRating } from '@/types'
import { memo } from 'react'
import InputSearch from './InputSearch'

const FilterForm = ({
	rating,
	setRating,
	setName,
}: {
	rating: TRating | undefined
	setRating: Dispatch<SetStateAction<TRating | undefined>>
	setName: React.Dispatch<React.SetStateAction<string>>
}) => {
	return (
		<form>
			<InputSearch setName={setName} />
			<RatingOption rating={rating} setRating={setRating} />
		</form>
	)
}

export default memo(FilterForm)
