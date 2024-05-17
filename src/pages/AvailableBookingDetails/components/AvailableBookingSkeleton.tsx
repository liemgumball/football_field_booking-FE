import { Skeleton } from '@/components/ui/skeleton'

const AvailableBookingSkeleton = () => {
	return (
		<main className="container">
			<header className="my-12 flex w-full flex-col justify-between gap-8 lg:flex-row">
				<div className="w-full max-w-[700px] space-y-4">
					<Skeleton className="h-[80px] lg:h-[35px]" />
					<Skeleton className="h-[20px] w-1/2" />
					<Skeleton className="mt-2 h-[15px] " />
				</div>
				<div className="flex flex-row justify-between gap-6">
					<Skeleton className="h-[50px] w-[150px] " />
					<Skeleton className="h-[50px] w-[120px] " />
					<Skeleton className="h-[50px] w-[120px] " />
				</div>
			</header>
			<section className="mx-auto my-4 min-w-max max-w-screen-sm rounded-xl bg-secondary/80 px-8 py-8 xl:px-16">
				<div className="space-y-8">
					<div className="space-y-3">
						<Skeleton className="h-[20px] max-w-32" />
						<Skeleton className="h-[40px] " />
					</div>
					<div className="space-y-3">
						<Skeleton className="h-[20px] max-w-32" />
						<Skeleton className="h-[40px] " />
					</div>
					<div className="space-y-3">
						<Skeleton className="h-[20px] max-w-32" />
						<Skeleton className="h-[80px] " />
					</div>
					<Skeleton className="mx-auto h-[50px] max-w-32 rounded-xl" />
				</div>
			</section>
		</main>
	)
}

export default AvailableBookingSkeleton
