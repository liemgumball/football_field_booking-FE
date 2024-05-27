import GoogleLoginButton from '@/components/GoogleLoginButton'
import SignUpForm from './components/SignUpForm'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const SignUp = () => {
	useDocumentTitle('Sign Up')

	return (
		<main className="container">
			<div className="container max-w-max space-y-7 border-b-2 pb-3 text-center">
				<h2 className="text-3xl font-bold capitalize">
					Create your new account
				</h2>
				<SignUpForm />
			</div>
			<GoogleLoginButton />
		</main>
	)
}

export default SignUp
