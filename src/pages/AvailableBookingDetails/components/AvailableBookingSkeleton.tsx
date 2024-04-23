import { Skeleton } from '@/components/ui/skeleton'

const AvailableBookingSkeleton = () => {
	return (
		<main className="container">
			<header className="my-12 flex flex-col justify-between gap-8 px-12 xl:flex-row">
				<div className="space-y-3">
					<Skeleton className="h-[35px] w-[500px] rounded-md" />
					<Skeleton className="h-[20px] w-[200px] rounded-md" />
					<Skeleton className="mt-2 h-[15px] w-[250px] rounded-md" />
				</div>
				<div className="my-auto flex justify-between gap-6">
					<Skeleton className="h-[50px] w-[120px] rounded-md" />
					<Skeleton className="h-[50px] w-[80px] rounded-md" />
					<Skeleton className="h-[50px] w-[80px] rounded-md" />
				</div>
			</header>
			<section className="mx-auto min-w-max max-w-[700px] rounded-xl bg-secondary/80 px-12 py-8 xl:px-16">
				<div className="space-y-5">
					<div className="space-y-3">
						<Skeleton className="h-[20px] w-[120px] rounded-md" />
						<Skeleton className="h-[50px] w-[550px] rounded-md" />
					</div>
					<div className="space-y-3">
						<Skeleton className="h-[20px] w-[120px] rounded-md" />
						<Skeleton className="h-[50px] w-[550px] rounded-md" />
					</div>
					<div className="space-y-3">
						<Skeleton className="h-[20px] w-[120px] rounded-md" />
						<Skeleton className="h-[50px] w-[550px] rounded-md" />
					</div>
					<Skeleton className="mx-auto h-[50px] w-[150px] rounded-xl" />
				</div>
			</section>
		</main>
	)
}

export default AvailableBookingSkeleton
