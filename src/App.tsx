import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'

const client = new QueryClient()

function App() {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<QueryClientProvider client={client}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</ErrorBoundary>
	)
}

export default App
