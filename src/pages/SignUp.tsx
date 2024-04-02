import SignUpForm from '@/components/SignUpForm'
import { Separator } from '@/components/ui/separator'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'

const SignUp = () => {
	const onSuccess = (res: CredentialResponse) => {
		console.log(res)
		// TODO
	}

	return (
		<main className="space-y-4 p-8">
			<SignUpForm />
			<Separator />
			<GoogleLogin onSuccess={onSuccess} />
		</main>
	)
}

export default SignUp
