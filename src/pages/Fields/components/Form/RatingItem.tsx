import Rating from '@/components/Rating'

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
		<div className="flex  flex-row items-center gap-2 lg:gap-4">
			<input type="radio" id={variant} checked={isChecked} onClick={onClick} />
			<label
				htmlFor={variant}
				className="flex gap-1 text-base uppercase lg:gap-2 lg:text-lg"
			>
				<span className="flex">
					<Rating rating={parseInt(variant)} />
				</span>
			</label>
		</div>
	)
}

export default RatingItem
