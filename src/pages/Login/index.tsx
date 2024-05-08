import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import { Link } from 'react-router-dom'

import loginImage from '/imageLogin.png'
import LoginForm from './components/LoginForm'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { PATHS } from '@/constants/navigation'

const Login = () => {
	const onSuccess = (credentialResponse: CredentialResponse) => {
		// TODO this credential response is a `jwt encoded`
		console.log('google login: ', credentialResponse)
	}

	return (
		<main className="flex w-full items-center md:container md:flex-col-reverse lg:flex-row">
			<div className="hidden w-full min-w-[500px] md:block">
				<img src={loginImage} alt="login image" />
			</div>
			<div className="flex w-full flex-col items-center space-y-7 px-0 py-6 lg:px-14 ">
				<h2 className="text-3xl font-bold capitalize">login</h2>
				<LoginForm />
				<GoogleLogin width={270} onSuccess={onSuccess} />
				<p className="text-center font-medium">
					Not a member?{' '}
					<Link
						to={PATHS.SIGNUP}
						className={cn(
							buttonVariants({ variant: 'link' }),
							'mr-1 px-0 text-base font-medium capitalize text-primary',
						)}
					>
						sign up
					</Link>{' '}
				</p>
			</div>
		</main>
	)
}

export default Login
