import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import { Link } from 'react-router-dom'

import loginImage from '/imageLogin.png'

import LoginForm from '@/components/LoginForm'

const Login = () => {
	const onSuccess = (credentialResponse: CredentialResponse) => {
		// TODO this credential response is a `jwt encoded`
		console.log('google login: ', credentialResponse)
	}

	return (
		<main className='flex md:flex-col-reverse lg:flex-row my-8 items-center' >
			<div className='hidden md:block'>
				<img src={loginImage} alt='login image' />
			</div>
			<div className="space-y-7 flex flex-col items-center py-8 px-0 lg:px-14 ">
				<h2 className='capitalize font-bold text-3xl'>login form</h2>
				<LoginForm />
				<GoogleLogin width={270} onSuccess={onSuccess} />
				<p className='font-medium text-center'>Not a member? <Link to='/signup' className='capitalize text-primary-foreground'>sign up</Link> </p>
			</div>
		</main>
	)
}

export default Login
