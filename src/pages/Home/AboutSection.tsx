import FootballFieldCard from '@/components/FootballFieldCard'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const AboutSection = () => {
	const section = useRef(null)

	// FIXME scroll trigger
	useGSAP(
		() => {
			gsap.from('.gsap', {
				y: -50,
				opacity: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.trigger',
					start: 'top',
					scrub: true,
				},
			})
		},
		{ scope: section },
	)

	return (
		<>
			<section ref={section} className="mt-32 space-y-16 px-8 pt-16">
				<div className="gsap flex justify-center">
					<div className="max-w-[800px] space-y-8 text-center">
						<Link
							to="/about"
							className={cn(buttonVariants({ size: 'lg' }), 'max-w-max')}
						>
							About Us
						</Link>
						<h2 className="text-5xl font-bold capitalize leading-tight tracking-normal">
							We Are The <span className="text-primary">Best Platform</span> For{' '}
							<span className="text-primary">Football Field</span> booking in{' '}
							<span className="text-primary">Danang</span>
						</h2>
						<p className="leading-relaxed tracking-normal text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
							dicta accusamus unde sed deleniti repellendus aliquam adipisci cum
							ratione asperiores? Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Officiis, maiores.
						</p>
					</div>
				</div>
				{/* TODO slide list */}
				<div className="gsap 2xl:grid-cols-4 trigger grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
					<FootballFieldCard name="Tuyen Son" rating={5} />
					<FootballFieldCard name="Tuyen Son" rating={5} />
					<FootballFieldCard name="Tuyen Son" rating={5} />
					<FootballFieldCard name="Tuyen Son" rating={5} />
				</div>
			</section>
		</>
	)
}

export default AboutSection