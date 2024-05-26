import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

const BookingDetailsSkeleton = () => {
	return (
		<div className="container mt-[90px]">
			<div className="flex flex-col justify-between gap-4 py-8 md:flex-row">
				<div className="w-full max-w-screen-sm space-y-4">
					<Skeleton className="h-16 w-full " />
					<Skeleton className="h-4 w-full " />
				</div>
				<Skeleton className="h-8 w-28 rounded-full " />
			</div>
			<Separator />
			<div className="container space-y-8 py-8">
				<div className="space-y-3">
					<Skeleton className="h-10 w-48  " />
					<Separator />
					<Skeleton className="h-4 w-24  " />
					<Skeleton className="h-4 w-64  " />
					<Skeleton className="h-4 w-64  " />
					<Skeleton className="h-4 w-80  " />
				</div>
				<div className="space-y-3">
					<Skeleton className="h-10 w-48  " />
					<Separator />
					<Skeleton className="h-4 w-24  " />
					<Skeleton className="h-4 w-64  " />
					<Skeleton className="h-4 w-80  " />
					<Skeleton className="h-4 w-64  " />
				</div>
				<div className="space-y-3">
					<Skeleton className="h-10 w-48  " />
					<Separator />
					<Skeleton className="h-4 w-64  " />
					<Skeleton className="h-4 w-24  " />
					<Skeleton className="h-64 w-full  " />
				</div>
			</div>
		</div>
	)
}

export default BookingDetailsSkeleton
