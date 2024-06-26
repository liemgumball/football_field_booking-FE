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
import BookingStatusIcon from '@/components/BookingStatusIcon'
import { ListFilterIcon, RotateCcwIcon } from 'lucide-react'

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
						<span>Status</span>
						{column.getFilterValue() === 'canceled' ? (
							<BookingStatusIcon status="canceled" className="ml-2" />
						) : column.getFilterValue() === 'confirmed' ? (
							<BookingStatusIcon status="confirmed" className="ml-2" />
						) : column.getFilterValue() === 'pending' ? (
							<BookingStatusIcon status="pending" className="ml-2" />
						) : (
							<ListFilterIcon className="ml-2 size-4" />
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuItem onClick={() => column.setFilterValue('confirmed')}>
						<BookingStatusIcon status="confirmed" label className="mr-1" />
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => column.setFilterValue('pending')}>
						<BookingStatusIcon status="pending" label className="mr-1" />
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => column.setFilterValue('canceled')}>
						<BookingStatusIcon status="canceled" label className="mr-1" />
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
