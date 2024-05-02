import { useState } from 'react'
import {
	ColumnDef,
	SortingState,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
	ColumnFiltersState,
	getFilteredRowModel,
} from '@tanstack/react-table'

// Components
import { Input } from '@/components/ui/input'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { DataTableViewOptions } from './ColumnToggle'
import { DataTablePagination } from './DataTablePagination'

type TProps<TData, TValue> = {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	isLoading?: boolean
}

const DataTable = <TData, TValue>({ columns, data }: TProps<TData, TValue>) => {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
		},
	})

	return (
		<div className="flex min-h-max flex-col">
			<div className="flex items-center pt-4">
				<Input
					placeholder="Filter field..."
					value={(table.getColumn('field')?.getFilterValue() as string) ?? ''}
					onChange={(event) =>
						table.getColumn('field')?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
				<DataTableViewOptions table={table} />
			</div>
			<div className="my-4 rounded-md border px-4">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
				<DataTablePagination className="my-4" table={table} />
			</div>
		</div>
	)
}

export default DataTable
