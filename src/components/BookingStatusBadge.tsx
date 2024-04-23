import { TTurnOfServiceStatus } from '@/types'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'

const BookingStatusBadge = ({
	status,
	className,
}: {
	status: TTurnOfServiceStatus
	className?: string
}) => {
	const variant =
		status === 'available'
			? 'default'
			: status === 'progressing'
				? 'secondary'
				: 'destructive'

	return (
		<Badge variant={variant} className={cn('capitalize', className)}>
			{status === 'used' ? 'not available' : status}
		</Badge>
	)
}

export default BookingStatusBadge
