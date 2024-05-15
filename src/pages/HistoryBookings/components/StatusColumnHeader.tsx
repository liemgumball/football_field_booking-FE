import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Column } from '@tanstack/react-table'
import BookingStatus from './BookingStatus'
import { RotateCcwIcon } from 'lucide-react'

type TProps<TData, TValue> = React.HTMLAttributes<HTMLDivElement> & {
	column: Column<TData, TValue>
}

const StatusColumnHeader = <TData, TValue>({
	column,
	className,
}: TProps<TData, TValue>) => {
	if (!column.getCanSort()) {
		return <div className={cn(className)}>Status</div>
	}

	return (
		<div className={cn('flex items-center space-x-2', className)}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="-ml-3 h-8 data-[state=open]:bg-accent"
					>
						{column.getFilterValue() === 'canceled' ? (
							<BookingStatus status="canceled" className="mr-1" />
						) : column.getFilterValue() === 'confirmed' ? (
							<BookingStatus status="confirmed" className="mr-1" />
						) : (
							<BookingStatus status="pending" className="mr-1" />
						)}
						<span>Status</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuItem onClick={() => column.setFilterValue('confirmed')}>
						<BookingStatus status="confirmed" label className="mr-1" />
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => column.setFilterValue('pending')}>
						<BookingStatus status="pending" label className="mr-1" />
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => column.setFilterValue('canceled')}>
						<BookingStatus status="canceled" label className="mr-1" />
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => column.setFilterValue('')}>
						<RotateCcwIcon size={16} className="mr-2" />
						Reset
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default StatusColumnHeader
