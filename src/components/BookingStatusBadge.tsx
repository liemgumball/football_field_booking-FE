import { TTurnOfServiceStatus } from '@/types'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'

type TProps = {
	status: TTurnOfServiceStatus | string
	className?: string
}

const BookingStatusBadge = ({ status, className }: TProps) => {
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
