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
import { mockFields } from '@/mocks/fields'

const AboutSection = () => {
	const [bestFields, setBestFields] = useState<TFootballField[]>(mockFields)
	const section = useRef(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fields = await getBestFields()
				setBestFields(fields)
			} catch (err) {
				// use some default data
				setBestFields(mockFields)
			}
		}
		fetchData()
	}, [])

	useGSAP(
		() => {
			// plugin scroll trigger
			gsap.registerPlugin(ScrollTrigger)

			gsap.from('.fields', {
				x: 50,
				opacity: 0,
				duration: 1.25,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.trigger',
					toggleActions: 'restart none none none',
				},
			})

			gsap.from('.titles', {
				x: -50,
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
			<section ref={section} className="space-y-16 px-4 pt-8">
				<div className="titles flex justify-center">
					<div className="max-w-[800px] space-y-8 text-center">
						<Link
							to={PATHS.ABOUT_US}
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
						{bestFields.map((field, index) => (
							<FootballFieldCard
								key={field._id}
								{...field}
								className={index === 3 ? 'xl:hidden 2xl:block' : ''}
							/>
						))}
					</div>
				) : null}
			</section>
		</>
	)
}

export default AboutSection
