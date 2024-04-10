import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import reviewImg from '@/assets/reviewImg.png'
import ReviewItem from '@/components/ReviewItem'


const ReviewSection = () => {
    return (
        <>
            <section className="trigger mt-16 space-y-16  pt-16">
                <div className="titles flex justify-center">
                    <div className="max-w-[800px] space-y-8 text-center">
                        <p className={cn(buttonVariants({ size: 'lg' }), 'max-w-max')}> Reviews </p>
                        <h2 className='text-5xl font-bold capitalize tracking-normal '>what our footballer say about our services</h2>
                    </div>

                </div>
                <div className='flex justify-between pr-32'>
                    <div className='max-w-[650px] max-h-[420px]'>
                        <img src={reviewImg} alt='review image' />
                    </div>
                    <ReviewItem />
                </div>

            </section>
        </>
    )
}

export default ReviewSection