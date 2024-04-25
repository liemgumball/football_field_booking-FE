import { TBooking, TBookingStatus, TFootballField, TSubField } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { DataTableColumnHeader } from './DataTableColumnHeader'
import BookingStatus from './BookingStatus'

const Columns: ColumnDef<TBooking, TBooking>[] = [
	// {
	// 	accessorKey: '_id',
	// 	header: 'ID',
	// },
	{
		accessorKey: 'field',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Field" />
		),
		cell: ({ row }) => {
			const field = row.getValue('field') as TFootballField
			return <span>{field.name}</span>
		},
		filterFn: (row, columnId, filterValue) => {
			const field = row.getValue(columnId) as TFootballField

			return field.name.trim().toLowerCase().startsWith(filterValue)
		},
	},
	{
		accessorKey: 'subfield',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Subfield" />
		),
		cell: ({ row }) => {
			const subfield = row.getValue('subfield') as TSubField
			return <span>{subfield.name}</span>
		},
	},
	{
		accessorKey: 'size',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Size" />
		),
		cell: ({ row }) => {
			const subfield = row.getValue('subfield') as TSubField
			return <span>{subfield.size}</span>
		},
	},
	{
		accessorKey: 'status',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
		cell: ({ cell }) => (
			<BookingStatus status={cell.getValue() as unknown as TBookingStatus} />
		),
	},
	{
		accessorKey: 'price',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Price" />
		),
	},

	{
		accessorKey: 'date',
		header: 'Booking Date',
		cell: ({ row }) => format(row.getValue('date'), 'PPP'),
	},
]

export default Columns
