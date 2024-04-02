import { GoogleLogin, CredentialResponse } from '@react-oauth/google'

import LoginForm from '@/components/LoginForm'
import { Separator } from '@/components/ui/separator'

const Login = () => {
	const onSuccess = (credentialResponse: CredentialResponse) => {
		// TODO this credential response is a `jwt encoded`
		console.log('google login: ', credentialResponse)
	}

	return (
		<main className="flex h-max flex-col justify-center space-y-8 p-8">
			<LoginForm />
			<Separator />
			<GoogleLogin onSuccess={onSuccess} />
		</main>
	)
}

export default Login
