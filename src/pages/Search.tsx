import AvailabilityForm from '@/components/AvailabilityForm'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const Search = () => {
	return (
		<main>
			<section
				className="relative h-[467px] w-screen bg-cover bg-center pb-48 pt-40"
				style={{
					backgroundImage:
						'url("https://demo.webtend.net/html/gowilds/assets/images/bg/page-bg.jpg")',
				}}
			>
				<div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-60"></div>
				<div className="container relative z-50">
					<div className="flex flex-col items-center gap-6">
						<h1 className="text-8xl font-extrabold text-white">
							Explore Tour Place
						</h1>
						<Breadcrumb className="rounded-xl bg-background/70 px-8 py-2">
							<BreadcrumbList className="text-lg">
								<BreadcrumbItem>
									<BreadcrumbLink href="/">Home</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>Football Fields</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					{/* FIXME should be new form */}
					<AvailabilityForm className="-top-10 mx-auto grid  -translate-y-10 grid-cols-2 justify-items-center rounded-2xl bg-popover px-4 py-6 xl:grid-cols-5" />
				</div>
			</section>
		</main>
	)
}

export default Search
