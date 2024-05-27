import { Input } from './ui/input'
import { Icons } from './Icons'

type TProps = {
	value: number
	onChange: (value: number) => void
}

const RatingInput = ({ value, onChange }: TProps) => {
	return (
		<div className="flex gap-1 pb-2">
			<Input type="number" disabled className="hidden" value={value} />
			{[1, 2, 3, 4, 5].map((i) => (
				<Icons.Rating
					size={20}
					key={i}
					active={i <= value}
					onClick={() => onChange(i)}
					className="cursor-pointer hover:text-secondary-foreground"
				/>
			))}
		</div>
	)
}

export default RatingInput
