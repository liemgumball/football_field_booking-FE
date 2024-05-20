import { Skeleton } from '@/components/ui/skeleton'

const SkeletonField = () => {
	return (
		<div className="relative h-[300px] w-[300px]">
			<Skeleton className="relative h-[300px] w-[300px] rounded-xl" />
			<div className="absolute bottom-8 left-2">
				<Skeleton className="h-24 w-[280px]" />
			</div>
		</div>
	)
}

export default SkeletonField
