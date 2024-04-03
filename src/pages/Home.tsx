import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import useThemeStore from '@/stores/theme'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Images } from '@/components/Images'

const Home = () => {
	const container = useRef<HTMLElement>(null)
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
		{ scope: container, dependencies: [theme] },
	)

	return (
		<main className="my-16">
			<section
				className="flex flex-col items-center gap-x-12 gap-y-12 xl:flex-row"
				ref={container}
			>
				<div>
					<h1 className="font-prompt mb-12 text-center text-6xl font-bold uppercase leading-tight tracking-wide text-foreground">
						Welcome to Our Field Booking Platform
					</h1>
					<div className="mx-auto flex max-w-[600px] items-center gap-x-8">
						<p className="max-w-[290px] leading-loose text-muted-foreground">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
							saepe? Lorem ipsum dolor sit amet.
						</p>
						<Link
							to="/"
							className="font-prompt inline-flex items-center rounded-full bg-primary p-1 pl-8 font-semibold transition-colors hover:bg-primary/80"
						>
							Explore More
							<span className="ml-6 rounded-full bg-secondary p-3 transition-colors">
								<Send width={22} height={22} />
							</span>
						</Link>
					</div>
				</div>
				<div className="hero-img mx-auto w-full min-w-[500px] max-w-[870px] overflow-hidden rounded-xl text-center lg:max-w-[1000px]">
					<AspectRatio ratio={1449 / 966}>
						{theme === 'dark' ? <Images.HeroDark /> : <Images.HeroLight />}
					</AspectRatio>
				</div>
			</section>
		</main>
	)
}

export default Home
