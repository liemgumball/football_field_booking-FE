import AvailabilityForm from '@/components/AvailabilityForm'
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
				x: -50,
				opacity: 0,
				duration: 1.25,
				scrollTrigger: {
					trigger: '.trigger',
					toggleActions: 'restart none none none',
				},
			})
			gsap.from('.image', {
				x: 50,
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
			className="mt-32 flex flex-col items-center justify-center gap-20 px-16 lg:flex-row"
		>
			<div className="check-form space-y-8">
				<p className="trigger rounded-xl text-2xl font-semibold text-primary">
					Availability
				</p>
				<h2 className="max-w-[600px] text-5xl font-bold leading-snug">
					Booking Your Best Football Field Availability
				</h2>
				<AvailabilityForm />
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
