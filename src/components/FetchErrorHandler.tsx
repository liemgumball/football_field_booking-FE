type TProps = {
	isError: boolean
	errorMsg?: string
	children?: React.ReactNode
}

const FetchErrorHandler = ({ isError, errorMsg, children }: TProps) => {
	if (isError)
		return (
			<p className="max-w-max truncate text-xl text-destructive xl:text-2xl">
				{errorMsg || 'An error occurred'}
			</p>
		)

	return children
}

export default FetchErrorHandler
