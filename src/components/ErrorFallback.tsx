import { ERROR_MSG } from '@/constants/message'
import { useErrorBoundary } from 'react-error-boundary'
import { Button } from './ui/button'

type ErrorFallbackProps = {
	error: Error
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
	const { resetBoundary } = useErrorBoundary() // reset boundary for hooks

	return (
		<div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
			<h1 className="font-600 text-4xl">{ERROR_MSG.ERROR_FALLBACK}</h1>
			<p className="normal-case text-red-600 ">{error.message}</p>
			<Button variant="default" onClick={resetBoundary}>
				Reload the page
			</Button>
		</div>
	)
}

export default ErrorFallback
