import { buttonVariants } from '@/components/ui/button'
import { PATHS } from '@/constants/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { Link } from 'react-router-dom'

const NotFound = () => {
	useDocumentTitle()
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
