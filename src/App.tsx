import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'
import ErrorBoundary from './components/ErrorBoundary'

const client = new QueryClient()

function App() {
	return (
		<ErrorBoundary>
			<QueryClientProvider client={client}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</ErrorBoundary>
	)
}

export default App
