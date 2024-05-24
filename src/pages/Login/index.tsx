import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { PATHS } from '@/constants/navigation'
import { Separator } from '@/components/ui/separator'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import { googleLogin } from '@/services/user'
import { toast } from '@/components/ui/use-toast'
import useAuthStore from '@/stores/auth'

const Login = () => {
	useDocumentTitle('Login')
	const setAuth = useAuthStore((state) => state.set)
	const navigate = useNavigate()

	const onSuccess = async (res: CredentialResponse) => {
		try {
			if (!res.credential) throw new Error('Fail to login with google account.')

			const response = await googleLogin({
				credential: res.credential,
			})
			if (response) {
				setAuth(response)
				navigate('/')
			}
		} catch (error) {
			if (error instanceof Error)
				toast({ title: error.message, variant: 'destructive' })

			if (error instanceof Response) {
				toast({ title: await error.text() })
			}
		}
	}

	return (
		<main className="container my-8 flex items-center lg:flex-row">
			{/* <div className="hidden w-full min-w-[500px] xl:block">
				<img src={loginImage} alt="login image" />
			</div> */}
			<div className="flex w-full flex-col items-center space-y-7 px-0 py-8 lg:px-14">
				<h2 className="text-3xl font-bold capitalize">login</h2>
				<LoginForm />
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
				<Separator />
				<GoogleLogin
					size="large"
					width={780}
					onSuccess={onSuccess}
					text="signin_with"
				/>
			</div>
		</main>
	)
}

export default Login
