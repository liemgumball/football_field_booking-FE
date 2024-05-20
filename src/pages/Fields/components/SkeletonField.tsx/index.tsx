import { Skeleton } from '@/components/ui/skeleton'

const SkeletonField = () => {
	return (
		<div className="relative h-[300px] w-[300px]">
			<Skeleton className="relative h-[300px] w-[300px] rounded-xl" />
			<div className="absolute bottom-5 left-7 ">
				<Skeleton className="h-[124px] w-[236px]" />
			</div>
		</div>
	)
}

export default SkeletonField
