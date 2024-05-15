import { StarIcon } from 'lucide-react'

const RatingItem = ({
	variant,
	isChecked,
	onClick,
}: {
	variant: string
	isChecked: boolean
	onClick: () => void
}) => {
	return (
		<div className="flex flex-row items-center gap-1 lg:gap-4">
			<input type="radio" checked={isChecked} onClick={onClick} />
			<label className="flex gap-0 text-base uppercase lg:gap-2 lg:text-lg">
				{variant} <StarIcon />
			</label>
		</div>
	)
}

export default RatingItem
