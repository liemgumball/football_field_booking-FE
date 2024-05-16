import FootballFieldCard from './components/FootballFieldCard'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'
import { PATHS } from '@/constants/navigation'
import { TFootballField } from '@/types'
import { getBestFields } from '@/services/football-field'

const AboutSection = () => {
	const [bestFields, setBestFields] = useState<TFootballField[]>([])
	const section = useRef(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fields = await getBestFields()
				setBestFields(fields)
			} catch (err) {
				// use some default data instead
				setBestFields([])
			}
		}
		fetchData()
	}, [])

	useGSAP(
		() => {
			// plugin scroll trigger
			gsap.registerPlugin(ScrollTrigger)

			gsap.from('.fields', {
				y: 50,
				opacity: 0,
				duration: 1.25,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.trigger',
					toggleActions: 'restart none none none',
				},
			})

			gsap.from('.titles', {
				y: -50,
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
		<>
			<section ref={section} className="mt-16 space-y-16 px-8 pt-16 ">
				<div className="titles flex justify-center">
					<div className="max-w-[800px] space-y-8 text-center">
						<Link
							to={PATHS.SUPPORT}
							className={cn(
								buttonVariants({ size: 'lg' }),
								'trigger max-w-max',
							)}
						>
							About Us
						</Link>
						<h2 className="text-4xl font-bold capitalize leading-tight tracking-normal md:text-5xl">
							We Are The <span className="text-primary">Best Platform</span> For{' '}
							<span className="text-primary">Football Field</span> booking in{' '}
							<span className="text-primary">Danang</span>
						</h2>
						<p className="text-sm leading-relaxed tracking-normal text-muted-foreground md:text-base">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
							dicta accusamus unde sed deleniti repellendus aliquam adipisci cum
							ratione asperiores? Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Officiis, maiores.
						</p>
					</div>
				</div>
				{bestFields.length ? (
					<div className="fields grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
						{bestFields.map((field) => (
							<FootballFieldCard key={field._id} {...field} />
						))}
					</div>
				) : null}
			</section>
		</>
	)
}

export default AboutSection
