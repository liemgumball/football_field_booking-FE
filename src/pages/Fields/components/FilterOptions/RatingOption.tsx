import RatingItem from './RatingItem'

const RatingOption = () => {
	return (
		<div className="mt-3 border-b-2 border-solid border-green-600 pb-5 pt-2">
			<p className="mb-2 text-xl capitalize">rating</p>
			<div className="flex flex-col gap-4 pl-4">
				<RatingItem variant="4" />
				<RatingItem variant="3" />
				<RatingItem variant="2" />
				<RatingItem variant="1" />
			</div>
		</div>
	)
}

export default RatingOption
