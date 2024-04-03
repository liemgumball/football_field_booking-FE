import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { buttonVariants } from './ui/button'

const SocialContactItem = ({ className }: { className?: string }) => {
	return (
		<div>
			{' '}
			<Link
				to="#"
				className={cn(
					buttonVariants({ variant: 'secondary' }),
					'size-14 rounded-full',
				)}
			>
				<i className={cn('text-lg text-accent-foreground', className)} />
			</Link>
		</div>
	)
}

export default SocialContactItem
