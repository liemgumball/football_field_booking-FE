import { Separator } from '@/components/ui/separator'
import SignUpForm from './components/SignUpForm'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import useAuthStore from '@/stores/auth'
import { useNavigate } from 'react-router-dom'
import { googleLogin } from '@/services/user'
import { toast } from '@/components/ui/use-toast'

const SignUp = () => {
	useDocumentTitle('Sign Up')
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
			<div className="flex w-full flex-col items-center space-y-7 px-0 py-8 lg:px-14">
				<h2 className="text-center text-3xl font-bold md:text-4xl">
					Create your new account
				</h2>
				<SignUpForm />
				<Separator />
				<GoogleLogin
					size="large"
					width={780}
					onSuccess={onSuccess}
					text="signup_with"
				/>
			</div>
		</main>
	)
}

export default SignUp
