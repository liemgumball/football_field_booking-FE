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
		<form className="flex flex-row items-center gap-4">
			<input type="radio" checked={isChecked} onClick={onClick} />
			<label className="flex gap-2 text-lg uppercase">
				{variant} <StarIcon />
			</label>
		</form>
	)
}

export default RatingItem
