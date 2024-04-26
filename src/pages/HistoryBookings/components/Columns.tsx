import { TBooking, TBookingStatus, TFootballField, TSubField } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { DataTableColumnHeader } from './DataTableColumnHeader'
import BookingStatus from './BookingStatus'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router-dom'

const Columns: ColumnDef<TBooking, TBooking>[] = [
	{
		accessorKey: 'status',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
		cell: ({ cell }) => (
			<BookingStatus
				status={cell.getValue() as unknown as TBookingStatus}
				className="w-[90px] capitalize"
			/>
		),
	},
	{
		accessorKey: 'field',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Field" />
		),
		cell: ({ cell }) => {
			const field = cell.getValue() as unknown as TFootballField
			return <div className="w-[180px] truncate">{field.name}</div>
		},
		filterFn: (row, columnId, filterValue: string) => {
			const field = row.getValue(columnId) as TFootballField

			return field.name
				.trim()
				.toLowerCase()
				.startsWith(filterValue.toLowerCase())
		},
	},
	{
		accessorKey: 'subfield',
		header: 'Subfield',
		cell: ({ cell }) => {
			const subfield = cell.getValue() as unknown as TSubField
			return <div className="w-[20px]">{subfield.name}</div>
		},
	},
	{
		accessorKey: 'size',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Size" />
		),
		cell: ({ row }) => {
			const subfield = row.getValue('subfield') as TSubField
			return <div className="w-[17px]">{subfield.size}</div>
		},
		sortingFn: (rowA, rowB) => {
			const subfieldA = rowA.getValue('subfield') as TSubField
			const subfieldB = rowB.getValue('subfield') as TSubField

			return subfieldA.size - subfieldB.size
		},
	},
	{
		accessorKey: 'price',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Price" />
		),
		cell: ({ cell }) => (
			<div className="w-[120px] truncate">
				{cell.getValue() as unknown as string},000 VND
			</div>
		),
	},

	{
		accessorKey: 'date',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Booking Date" />
		),
		cell: ({ cell }) => (
			<div className="text-nowrap">
				{format(cell.getValue() as unknown as string, 'PPP')}
			</div>
		),
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const booking = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<Link to={`${booking._id}`}>View booking details</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View field details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]

export default Columns
