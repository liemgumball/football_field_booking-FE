import { Separator } from '@/components/ui/separator'
import SignUpForm from './components/SignUpForm'
import signupImg from '/signupImg.png'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const SignUp = () => {
	useDocumentTitle('Sign Up')

	const onSuccess = (res: CredentialResponse) => {
		console.log(res)
		// TODO
	}

	return (
		<main className="container my-8 flex items-center lg:flex-row">
			<div className="hidden h-auto max-w-[780px] xl:block">
				<img src={signupImg} alt="signup image" />
			</div>
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
