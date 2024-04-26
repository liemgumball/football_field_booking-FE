import { Skeleton } from './ui/skeleton'

const SkeletonCard = () => {
	return (
		<div className="flex flex-col space-y-6">
			<Skeleton className="h-[310px] w-[420px] rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[120px]" />
				<Skeleton className="h-16 w-[280px]" />
				<div className="my-4 flex space-x-6 pt-6">
					<Skeleton className="h-10 w-[80px]" />
					<Skeleton className="h-10 w-[80px]" />
					<Skeleton className="h-10 w-[100px]" />
				</div>
			</div>
		</div>
	)
}

export default SkeletonCard
