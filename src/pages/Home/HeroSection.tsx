import { Images } from '@/components/Images'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import useThemeStore from '@/stores/theme'
import { useGSAP } from '@gsap/react'
import { Send } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import useAuthStore from '@/stores/auth'
import { PATHS } from '@/constants/navigation'

const HeroSection = () => {
	const section = useRef(null)
	const theme = useThemeStore((set) => set.theme)
	const user = useAuthStore((set) => set.user)

	useGSAP(
		() => {
			gsap.from('h1', {
				y: -50,
				opacity: 0,
				duration: 1,
				ease: 'power2.out',
			})
			gsap.from('p', {
				x: -50,
				opacity: 0,
				duration: 1,
				ease: 'power2.out',
			})
			gsap.from('a', {
				x: 50,
				opacity: 0,
				duration: 1,
				ease: 'power2.out',
			})
			gsap.from('.hero-img', {
				x: 50,
				opacity: 0,
				duration: 1.5,
				ease: 'power2.out',
				delay: 0.45,
			})
		},
		{ scope: section, dependencies: [theme, user] },
	)
	return (
		<section
			className="flex w-full flex-col items-center gap-x-12 gap-y-12 transition xl:flex-row"
			ref={section}
		>
			<div>
				<h1 className="mb-12 text-center text-4xl font-bold uppercase leading-tight tracking-wide text-foreground md:text-6xl">
					Welcome to Our <span className="text-primary">Field Booking</span>{' '}
					Platform
				</h1>
				<div className="mx-auto flex max-w-[600px] flex-col items-center justify-center gap-8 md:flex-row">
					<p className="max-w-[290px] text-sm leading-loose text-muted-foreground md:block md:text-base">
						Step into the world of effortless football field booking, your
						one-stop solution for securing the perfect pitch for your next match
						or training session
					</p>
					<Link
						to={PATHS.AVAILABLE_BOOKING.BASE}
						className="inline-flex items-center rounded-full bg-primary p-1 pl-8 font-semibold text-primary-foreground transition-colors hover:bg-primary/80"
					>
						Explore More
						<span className="ml-6 rounded-full bg-primary-foreground p-3 text-primary transition-colors">
							<Send width={22} height={22} />
						</span>
					</Link>
				</div>
			</div>
			<div className="hero-img w-full overflow-hidden rounded-xl text-center lg:max-w-[1000px]">
				<AspectRatio ratio={1449 / 966}>
					<Images.HeroDark hidden={theme !== 'dark'} />
					<Images.HeroLight hidden={theme === 'dark'} />
				</AspectRatio>
			</div>
		</section>
	)
}

export default HeroSection
