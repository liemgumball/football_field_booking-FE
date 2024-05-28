import { buttonVariants } from '@/components/ui/button'
import presentationImg from '/presentationImg.png'
import { cn } from '@/lib/utils'

const PresentSection = () => {
	return (
		<section className="container flex flex-col-reverse items-center gap-5 xl:flex-row">
			<div className="hero-img h-auto w-full overflow-hidden rounded-xl md:max-w-[700px] ">
				<img src={presentationImg} alt="review image" />
			</div>

			<div className="space-y-1 md:max-w-[600px] md:space-y-4 lg:max-w-[800px] lg:space-y-12">
				<div className="space-y-8 text-center">
					<p className={cn(buttonVariants({ size: 'sm' }), 'max-w-max')}>
						{' '}
						Who We Are{' '}
					</p>
					<h2 className="mt-3 text-3xl font-bold capitalize md:text-4xl lg:text-5xl">
						great opportunity for football & sports
					</h2>
					<p className="mt-4 text-sm font-normal text-muted-foreground md:text-base">
						Experience the power of our football field booking website
						firsthand. Schedule a free demo today and discover how we can
						revolutionize your passion for football
					</p>
				</div>
				<div className="mt-3 flex flex-wrap justify-center gap-3 px-6 py-10 shadow-xl ">
					<div className="px-8">
						<p
							className="text-center 
                         text-lg font-semibold md:text-xl lg:text-3xl"
						>
							60%
						</p>
						<p className="text-nowrap text-lg font-bold capitalize lg:text-3xl">
							saticfied clients
						</p>
					</div>
					<div className="px-8">
						<p
							className="text-center 
                         text-lg font-semibold md:text-xl lg:text-3xl"
						>
							93%
						</p>
						<p className="text-nowrap text-lg font-bold capitalize lg:text-3xl">
							succes rate
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PresentSection
