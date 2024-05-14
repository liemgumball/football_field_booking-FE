import { Skeleton } from '@/components/ui/skeleton'

const SkeletonField = () => {
	return (
		<div className="relative h-[227px] w-[300px]">
			<Skeleton className="h-[227px] w-[300px] rounded-xl" />
			<div className="absolute right-5 top-5">
				<Skeleton className="h-6 w-[60px]" />
			</div>
			<div className="absolute bottom-4 left-2">
				<Skeleton className="h-8 w-[200px]" />
			</div>
		</div>
	)
}

export default SkeletonField
