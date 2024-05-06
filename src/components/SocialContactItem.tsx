import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { buttonVariants } from './ui/button'

const SocialContactItem = ({ className }: { className?: string }) => {
	return (
		<Link
			to="#"
			className={cn(
				buttonVariants({ variant: 'secondary' }),
				'size-5 shrink-0 rounded-full md:size-14',
			)}
		>
			<i className={cn('text-xs md:text-lg text-accent-foreground', className)} />
		</Link>
	)
}

export default SocialContactItem
