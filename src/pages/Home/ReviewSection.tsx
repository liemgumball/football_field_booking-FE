import * as React from "react"
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import reviewImg from '@/assets/reviewImg.png'
import ReviewItem from '@/components/ReviewItem'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"



const ReviewSection = () => {
    const section = useRef(null);

    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))


    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger)

        gsap.from(".titles", {
            scrollTrigger: {
                trigger: ".titles",
                toggleActions: "restart none none none"

            },
            duration: 2,
            y: -50
        })

        gsap.from(".hero-img", {
            scrollTrigger: {
                trigger: ".hero-img",
                toggleActions: "restart none none none"

            },
            duration: 1,
            x: -40
        });

        gsap.from(".review-item", {
            scrollTrigger: {
                trigger: ".review-item",
                toggleActions: "restart none none none"
            },

            duration: 1,
            x: 40
        })

    }, { scope: section })




    return (
        <>
            <section ref={section} className="mt-16 space-y-16  pt-16">
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
                    <Carousel plugins={[plugin.current]} className='w-full max-w-xl review-item'>
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <ReviewItem />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

            </section>
        </>
    )
}

export default ReviewSection