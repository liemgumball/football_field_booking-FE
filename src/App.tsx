import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'

function App() {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<RouterProvider router={router} />
		</ErrorBoundary>
	)
}

export default App
