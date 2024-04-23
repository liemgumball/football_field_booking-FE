import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import reviewImg from '@/assets/reviewImg.png'
import ReviewItem from '@/components/ReviewItem'
import { AspectRatio } from '@/components/ui/aspect-ratio'


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
                <div className='flex justify-around flex-col md:flex-col gap-9 items-center lg:flex-row '>
                    <div className="hero-img mx-auto w-full min-w-[600px] max-w-[870px] overflow-hidden rounded-xl text-center lg:max-w-[1000px]">
                        <AspectRatio ratio={1449 / 966}>
                            <img src={reviewImg} alt='review image' />
                        </AspectRatio>
                    </div>
                    <ReviewItem />
                </div>

            </section>
        </>
    )
}

export default ReviewSection