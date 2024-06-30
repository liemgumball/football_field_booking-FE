import quote from '/quote.png'
import AuthorItem from './AuthorItem'

const ReviewItem = () => {
	return (
		<div className="review-item cursor-move">
			<div className="flex gap-7">
				<img src={quote} alt="quote" />
				<div>
					<p className="text-2xl">Quality Services</p>
				</div>
			</div>
			<p className="mb-6 mt-5 max-w-[600px] text-2xl font-semibold">
				As a longtime soccer fan, I have had the opportunity to experience
				playing at many different soccer fields. However, This Football Field
				really left a very deep impression on me.
			</p>
			<AuthorItem name="Le Hoang" email="le123@gmail.com" />
		</div>
	)
}

export default ReviewItem
