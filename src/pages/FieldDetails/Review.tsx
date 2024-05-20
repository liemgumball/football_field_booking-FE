import UserReviewItem from './components/UserReviewItem'
import ReviewForm from './components/ReviewForm'

const Review = () => {
	return (
		<section className="my-16 flex flex-col gap-6">
			<UserReviewItem />
			<ReviewForm />
		</section>
	)
}

export default Review
