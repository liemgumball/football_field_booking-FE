import BackGroundImg from '/available_booking_bg.png'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const HeroSection = () => {
	return (
		<section
			className="relative z-0 h-[600px] w-screen bg-cover bg-center pb-56 pt-40"
			style={{
				backgroundImage: `url("${BackGroundImg}")`,
			}}
		>
			<div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-40" />
			<div className="container relative z-10">
				<div className="flex flex-col items-start gap-8 lg:items-center">
					<h1 className="text-6xl font-extrabold text-white">
						Explore Available Booking
					</h1>
					<Breadcrumb className="rounded-xl bg-background/70 px-8 py-2">
						<BreadcrumbList className="text-lg">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Available Bookings</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
