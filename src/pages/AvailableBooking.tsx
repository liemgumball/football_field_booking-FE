import BackGroundImg from '/available_booking_bg.png'
import AvailabilityForm from '@/components/AvailabilityForm'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const AvailableBooking = () => {
	return (
		<main>
			<section
				className="relative h-[600px] w-screen bg-cover bg-center pb-56 pt-40"
				style={{
					backgroundImage: `url("${BackGroundImg}")`,
				}}
			>
				<div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-40" />
				<div className="container relative z-10">
					<div className="flex flex-col items-start gap-8 lg:items-center">
						<h1 className="text-7xl font-extrabold text-white">
							Explore Available Booking
						</h1>
						<Breadcrumb className="rounded-xl bg-background/70 px-8 py-2">
							<BreadcrumbList className="text-lg">
								<BreadcrumbItem>
									<BreadcrumbLink href="/">Home</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>Available Booking</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<AvailabilityForm
						isLocationSearched
						className="mx-auto grid grid-cols-1 justify-items-center rounded-2xl bg-popover px-4 pb-6 pt-10 md:grid-cols-2 xl:grid-cols-5"
					/>
				</div>
			</section>
		</main>
	)
}

export default AvailableBooking
