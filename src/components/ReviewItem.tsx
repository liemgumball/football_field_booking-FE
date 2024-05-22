import quote from '/quote.png'
import AuthorItem from '../pages/Home/components/AuthorItem'

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
				To take a trivial example which of usev undertakes laborious physical
				exercise excepto obtain advantage from has any right to find fault with
				man who chooses to enjoy
			</p>
			<AuthorItem />
		</div>
	)
}

export default ReviewItem
