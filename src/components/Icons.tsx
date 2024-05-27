import { CheckIcon, Loader2Icon, StarIcon } from 'lucide-react'
import logo from '/football-icon.svg'
import { cn } from '@/lib/utils'

export const Icons = {
	/**
	 * @default
	 * width: 70  height: 70
	 */
	Logo: ({ height, width }: { height?: number; width?: number }) => (
		<img
			className="min-w-[70px]"
			src={logo}
			alt="logo"
			height={height || 70}
			width={width || 70}
		/>
	),

	Loader: ({ size = 18, className }: { size?: number; className?: string }) => (
		<Loader2Icon className={cn('animate-spin', className)} size={size} />
	),

	Success: ({
		size = 18,
		className,
	}: {
		size?: number
		className?: string
	}) => (
		<CheckIcon
			size={size}
			className={cn('animate-bounce-once text-primary', className)}
		/>
	),

	Rating: ({
		size,
		active = false,
		className,
		...rest
	}: {
		size?: number
		active?: boolean
	} & React.HTMLAttributes<SVGSVGElement>) => (
		<StarIcon
			{...rest}
			size={size}
			className={cn(
				active ? 'text-orange-500' : 'text-muted-foreground',
				className,
			)}
		/>
	),
}
