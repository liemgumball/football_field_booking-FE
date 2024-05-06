import SignUpForm from '@/components/SignUpForm'
import signupImg from '/signupImg.png'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'

const SignUp = () => {
	const onSuccess = (res: CredentialResponse) => {
		console.log(res)
		// TODO
	}

	return (
		<main className="my-8 flex items-center md:flex-col-reverse lg:flex-row">
			<div className="hidden h-auto max-w-[780px] md:block">
				<img src={signupImg} alt="signup image" />
			</div>
			<div className="flex flex-col items-center space-y-7 px-0 py-8 lg:px-14">
				<SignUpForm />
				<GoogleLogin width={275} onSuccess={onSuccess} />
			</div>
		</main>
	)
}

export default SignUp
