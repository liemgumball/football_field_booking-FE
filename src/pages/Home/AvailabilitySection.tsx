import { Button } from '@/components/ui/button'
import { PATHS } from '@/constants/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import AvailabilitySearchForm from './components/AvailabilitySearchForm'

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
				<Button size="lg" asChild className="trigger max-w-max">
					<Link to={PATHS.AVAILABLE_BOOKING.BASE}>Availability</Link>
				</Button>
				<h2 className="max-w-[600px] text-4xl font-bold leading-snug md:text-5xl">
					Booking Your <span className="text-primary">Best Football Field</span>{' '}
					Availability
				</h2>
				<AvailabilitySearchForm className="grid items-start md:col-start-2 md:grid-cols-2" />
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
