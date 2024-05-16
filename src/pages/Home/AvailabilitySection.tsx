import AvailabilityForm from '@/components/AvailabilityForm'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const AvailabilitySection = () => {
	const ref = useRef(null)

	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger)
			gsap.from('.check-form', {
				y: 50,
				opacity: 0,
				duration: 1.25,
				scrollTrigger: {
					trigger: '.trigger',
					toggleActions: 'restart none none none',
				},
			})
			gsap.from('.image', {
				y: -50,
				opacity: 0,
				duration: 1.25,
				scrollTrigger: {
					trigger: '.trigger',
					toggleActions: 'restart none none none',
				},
			})
		},
		{ scope: ref },
	)

	return (
		<section
			ref={ref}
			className="flex flex-col items-center justify-center gap-8 px-4 pt-4 xl:flex-row xl:gap-20"
		>
			<div className="check-form space-y-8">
				<p className={cn(buttonVariants({ size: 'lg' }), 'trigger max-w-max')}>
					Availability
				</p>
				<h2 className="max-w-[600px] text-5xl font-bold leading-snug">
					Booking Your <span className="text-primary">Best Football Field</span>{' '}
					Availability
				</h2>
				{/* TODO use different form */}
				<AvailabilityForm className="grid grid-cols-1 items-start justify-items-center md:grid-cols-2 lg:justify-items-start" />
			</div>
			<div className="image overflow-hidden rounded-3xl">
				<img
					src="https://demo.webtend.net/html/gowilds/assets/images/contact/contact-1.jpg"
					alt="demo"
				/>
			</div>
		</section>
	)
}

export default AvailabilitySection
