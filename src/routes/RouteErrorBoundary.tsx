import { ERROR_MSG } from '@/constants/message'
import { Link } from 'react-router-dom'
import { buttonVariants } from '../components/ui/button'

const RouteErrorBoundary = () => {
	return (
		<div className="container my-auto max-w-max space-y-4 text-center">
			<h1 className="font-600 text-3xl text-destructive">
				{ERROR_MSG.ERROR_FALLBACK}
			</h1>
			<p className="normal-case text-muted-foreground">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
				sit dolorem odit eius quam officia quidem excepturi debitis culpa
				explicabo?
			</p>
			<Link
				to="#"
				reloadDocument
				className={buttonVariants({ variant: 'outline', size: 'lg' })}
			>
				Try again
			</Link>
		</div>
	)
}

export default RouteErrorBoundary
