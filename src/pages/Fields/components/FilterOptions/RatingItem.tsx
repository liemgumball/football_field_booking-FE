import { StarIcon } from 'lucide-react'

const RatingItem = ({ variant }: { variant: string }) => {
	return (
		<form className="flex flex-row items-center gap-4">
			<input type="radio" />
			<label className="flex gap-2 text-lg uppercase">
				{variant} <StarIcon />
			</label>
		</form>
	)
}

export default RatingItem
