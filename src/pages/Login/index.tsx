import { Link } from 'react-router-dom'
import useDocumentTitle from '@/hooks/useDocumentTitle'

import LoginForm from './components/LoginForm'
import { PATHS } from '@/constants/navigation'
import GoogleLoginButton from '@/components/GoogleLoginButton'

const Login = () => {
	useDocumentTitle('Login')

	return (
		<main className="container mb-8 mt-[60px] text-center md:mt-[96px]">
			<div className="container max-w-max space-y-7 border-b-2 pb-4 text-center">
				<h2 className="text-3xl font-bold capitalize">login</h2>
				<LoginForm />
				<p className="text-center font-medium">
					Not a member?{' '}
					<Link
						to={PATHS.SIGNUP}
						className="mr-2 text-primary underline-offset-2 hover:underline"
					>
						Sign up
					</Link>
				</p>
			</div>
			<GoogleLoginButton />
		</main>
	)
}

export default Login
