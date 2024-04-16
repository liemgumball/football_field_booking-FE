import { cn } from '@/lib/utils'

type QueryListProps = {
	isLoading?: boolean
	isFetching?: boolean
	isError?: boolean
	error?: Error | null
	children?: React.ReactNode
	className?: string
}

const QueryList = ({
	isLoading,
	isFetching,
	isError,
	error,
	children,
	className,
}: QueryListProps) => {
	// TODO use skeleton loading here
	if (isLoading) return <p>Loading...</p>

	if (isError) return <p>{error?.message || 'Error...'}</p>

	return (
		<>
			<ul className={cn('', className)}>{children}</ul>
			{isFetching && <p>Fetching ...</p>}
		</>
	)
}

export default QueryList
