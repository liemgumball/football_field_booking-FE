import { Images } from '@/components/Images'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import useThemeStore from '@/stores/theme'
import { useGSAP } from '@gsap/react'
import { Send } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const HeroSection = () => {
	const section = useRef(null)
	const theme = useThemeStore((set) => set.theme)

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
		{ scope: section, dependencies: [theme] },
	)
	return (
		<section
			className="mt-16 flex flex-col items-center gap-x-12 gap-y-12 transition xl:flex-row"
			ref={section}
		>
			<div>
				<h1 className="mb-12 text-center text-6xl font-bold uppercase leading-tight tracking-wide text-foreground">
					Welcome to Our Field Booking Platform
				</h1>
				<div className="mx-auto flex max-w-[600px] items-center gap-x-8">
					<p className="max-w-[290px] leading-loose text-muted-foreground">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
						saepe? Lorem ipsum dolor sit amet.
					</p>
					<Link
						to="/"
						className="inline-flex items-center rounded-full bg-primary p-1 pl-8 font-semibold transition-colors hover:bg-primary/80"
					>
						Explore More
						<span className="ml-6 rounded-full bg-secondary p-3 transition-colors">
							<Send width={22} height={22} />
						</span>
					</Link>
				</div>
			</div>
			<div className="hero-img mx-auto w-full min-w-[600px] max-w-[870px] overflow-hidden rounded-xl text-center lg:max-w-[1000px]">
				<AspectRatio ratio={1449 / 966}>
					<Images.HeroDark hidden={theme !== 'dark'} />
					<Images.HeroLight hidden={theme === 'dark'} />
				</AspectRatio>
			</div>
		</section>
	)
}

export default HeroSection
