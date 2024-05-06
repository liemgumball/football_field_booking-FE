import SignUpForm from '@/components/SignUpForm'
import signupImg from '/signupImg.png'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'

const SignUp = () => {
	const onSuccess = (res: CredentialResponse) => {
		console.log(res)
		// TODO
	}

	return (
		<main className='flex md:flex-col-reverse lg:flex-row my-8 items-center'>
			<div className='max-w-[780px] h-auto hidden md:block'>
				<img src={signupImg} alt='signup image' />
			</div>
			<div className="space-y-7 flex flex-col items-center py-8 px-0 lg:px-14">
				<SignUpForm />
				<GoogleLogin width={275} onSuccess={onSuccess} />
			</div>

		</main>
	)
}

export default SignUp
