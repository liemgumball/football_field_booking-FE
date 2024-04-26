import { TBooking, TBookingStatus, TFootballField, TSubField } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { DataTableColumnHeader } from './DataTableColumnHeader'
import BookingStatus from './BookingStatus'

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
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Subfield" />
		),
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
]

export default Columns
