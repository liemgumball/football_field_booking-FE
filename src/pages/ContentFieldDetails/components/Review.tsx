import ReviewForm from './ReviewForm'
import UserReviewItem from './UserReviewItem'

const Review = () => {
	return (
		<section className="flex flex-col items-center justify-between gap-2 xl:flex-row">
			<UserReviewItem />
			<ReviewForm />
		</section>
	)
}

export default Review
