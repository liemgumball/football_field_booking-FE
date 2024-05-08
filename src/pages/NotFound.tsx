import { buttonVariants } from '@/components/ui/button'
import { PATHS } from '@/constants/navigation'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<main className="my-auto space-y-8 text-center">
			<p className="text-4xl font-bold">Page Not Found</p>
			<Link to={PATHS.HOME} className={buttonVariants()}>
				Back to Home
			</Link>
		</main>
	)
}

export default NotFound
