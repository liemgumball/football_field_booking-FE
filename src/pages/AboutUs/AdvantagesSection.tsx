import FeatureItem from '@/pages/AboutUs/components/FeatureItem'
import featureImage1 from '/featureImage1.png'
import featureImage2 from '/featureImage2.png'
import featureImage3 from '/featureImage3.png'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import bookingIcon from '/booking.png'
import realtimeIcon from '/real-time.png'

const Features = [
	{
		name: 'effortless booking experience',
		description:
			'Clients can easily search for, compare, and book available fields at their convenience, 24/7',
		image: bookingIcon,
	},
	{
		name: 'real-time availability',
		description: 'Clients have access to up-to-date availability information',
		image: realtimeIcon,
	},
	{
		name: 'streamlined payment processing',
		description:
			'Secure online payment options allow clients to complete their bookings seamlessly',
		image: bookingIcon,
	},
]

const Advantages = () => {
	return (
		<section className="container flex flex-col items-center justify-between gap-8 md:gap-12 xl:flex-row">
			<div className="space-y-6 md:max-w-[600px] md:space-y-8">
				<p
					className={cn(
						buttonVariants({ size: 'sm' }),
						'mx-auto flex max-w-max xl:mx-0',
					)}
				>
					{' '}
					Who We Are{' '}
				</p>
				<h2 className="text-center text-3xl font-bold capitalize md:text-4xl lg:text-5xl xl:text-start">
					great opportunity for football & sports
				</h2>
				<ul className="mt-8 space-y-8 md:space-y-16">
					{Features.map((feature, index) => (
						<FeatureItem
							key={index}
							name={feature.name}
							description={feature.description}
							image={feature.image}
						/>
					))}
				</ul>
			</div>
			<ul className="grid grid-cols-2 gap-5">
				<li className="hidden self-end overflow-hidden rounded-xl 2xl:block">
					<img src={featureImage2} alt="feature image 2" />
				</li>
				<li className="hidden self-center 2xl:block">
					<img
						className="rounded-xl"
						src={featureImage3}
						alt="feature image 3"
					/>
				</li>
				<li className="col-span-2 md:min-w-[550px]">
					<img
						className="rounded-xl"
						src={featureImage1}
						alt="feature image 1"
					/>
				</li>
			</ul>
		</section>
	)
}

export default Advantages
