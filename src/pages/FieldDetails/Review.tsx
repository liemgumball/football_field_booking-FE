import UserReviewItem from './components/UserReviewItem'
import ReviewForm from '../../components/ReviewForm'

const Review = () => {
	return (
		<section className="flex flex-col items-center justify-between gap-6 xl:flex-row">
			<UserReviewItem />
			<ReviewForm />
		</section>
	)
}

export default Review
