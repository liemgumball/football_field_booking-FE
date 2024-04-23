import quote from '@/assets/quote.png'
import AuthorItem from './AuthorItem';

const ReviewItem = () => {

    return (
        <>
            <div >
                <div className="flex gap-7">
                    <img src={quote} alt='quote' />
                    <div>
                        <p className="text-2xl">Quality Services</p>
                    </div>
                </div>
                <p className="text-4xl font-semibold mt-5 mb-6 max-w-[600px]">To take a trivial example which of
                    usev undertakes laborious physical
                    exercise excepto obtain advantage
                    from has any right to find fault with
                    man who chooses to enjoy</p>

                <AuthorItem />
            </div>
        </>
    )

}

export default ReviewItem;