import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import { Link } from 'react-router-dom'

import loginImage from '/imageLogin.png'
import LoginForm from './components/LoginForm'

const Login = () => {
	const onSuccess = (credentialResponse: CredentialResponse) => {
		// TODO this credential response is a `jwt encoded`
		console.log('google login: ', credentialResponse)
	}

	return (
		<main className="my-8 flex items-center md:flex-col-reverse lg:flex-row">
			<div className="hidden md:block">
				<img src={loginImage} alt="login image" />
			</div>
			<div className="flex flex-col items-center space-y-7 px-0 py-8 lg:px-14 ">
				<h2 className="text-3xl font-bold capitalize">login form</h2>
				<LoginForm />
				<GoogleLogin width={270} onSuccess={onSuccess} />
				<p className="text-center font-medium">
					Not a member?{' '}
					<Link to="/signup" className="capitalize text-primary-foreground">
						sign up
					</Link>{' '}
				</p>
			</div>
		</main>
	)
}

export default Login
