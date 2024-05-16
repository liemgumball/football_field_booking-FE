import * as React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import reviewImg from '/reviewImg.png'
import ReviewItem from '@/components/ReviewItem'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const ReviewSection = () => {
	const section = useRef(null)

	const plugin = React.useRef(
		Autoplay({ delay: 10000, stopOnInteraction: false }),
	)

	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger)

			gsap.from('.titles', {
				y: 50,
				opacity: 0,
				duration: 1.25,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.trigger',
					toggleActions: 'restart none none none',
				},
			})

			gsap.from('.hero-img', {
				x: -50,
				opacity: 0,
				duration: 1.25,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.trigger',
					toggleActions: 'restart none none none',
				},
			})

			gsap.from('.review-item', {
				x: 50,
				opacity: 0,
				duration: 1.25,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.trigger',
					toggleActions: 'restart none none none',
				},
			})
		},
		{ scope: section },
	)

	return (
		<section ref={section} className="container space-y-8 pt-8 lg:space-y-16">
			<div className="titles flex justify-center">
				<div className="max-w-[600px] space-y-8 text-center">
					<p className={cn(buttonVariants({ size: 'lg' }), 'trigger')}>
						{' '}
						Reviews{' '}
					</p>
					<h2 className="text-4xl font-bold capitalize tracking-normal md:text-5xl ">
						what our footballer say about our services
					</h2>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-10 lg:flex-row ">
				<div className="hero-img min-w-[460px] overflow-hidden rounded-xl text-center md:min-w-[600px]">
					<AspectRatio ratio={1449 / 966}>
						<img src={reviewImg} alt="review image" />
					</AspectRatio>
				</div>
				<Carousel
					plugins={[plugin.current]}
					className="review-item min-w-[360px] max-w-[480px] px-2"
				>
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
	)
}

export default ReviewSection
