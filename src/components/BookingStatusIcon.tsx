import { cn } from '@/lib/utils'
import { TBookingStatus } from '@/types'
import { VariantProps, cva } from 'class-variance-authority'
import { BanIcon, CheckIcon, CircleDashedIcon } from 'lucide-react'

const bookingStatusIconVariants = cva('', {
	variants: {
		status: {
			confirmed: 'text-primary',
			canceled: 'text-destructive',
			pending: 'text-secondary-foreground',
		} satisfies Record<TBookingStatus, string>,
	},
})

type TProps = VariantProps<typeof bookingStatusIconVariants> & {
	label?: boolean
	className?: string
}

const BookingStatusIcon = ({ status, className, label = false }: TProps) => {
	let Icon: React.FC<{ className?: string }> | null = null

	if (status === 'canceled')
		Icon = ({ className }) => <BanIcon size={16} className={className} />
	if (status === 'confirmed')
		Icon = ({ className }) => <CheckIcon size={16} className={className} />
	if (status === 'pending')
		Icon = ({ className }) => (
			<CircleDashedIcon size={16} className={className} />
		)

	return (
		<div className={cn('inline-flex items-center gap-2', className)}>
			{Icon && <Icon className={bookingStatusIconVariants({ status })} />}
			{label && <span className="capitalize">{status}</span>}
		</div>
	)
}

export default BookingStatusIcon
