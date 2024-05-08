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
		<div className="relative h-[500px]  bg-hero-about-us bg-cover bg-center">
			<div className="absolute left-0 top-0 h-full w-full bg-black/50 py-56">
				<div className="container">
					<div className="flex h-full flex-col items-center gap-3  capitalize text-white">
						<h1 className="text-xl font-bold md:text-3xl lg:text-5xl">
							about us
						</h1>
						<Breadcrumb className="rounded-xl bg-background/70 px-8 py-2">
							<BreadcrumbList className="text-base md:text-lg">
								<BreadcrumbItem>
									<BreadcrumbLink href="/">Home</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>About Us</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
