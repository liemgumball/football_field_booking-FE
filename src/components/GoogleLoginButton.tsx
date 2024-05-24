import { googleLogin } from '@/services/user'
import useAuthStore from '@/stores/auth'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from './ui/use-toast'
import { Icons } from './Icons'

const GoogleLoginButton = () => {
	const setAuth = useAuthStore((state) => state.set)
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState(false)

	const onSuccess = async (res: CredentialResponse) => {
		try {
			setIsLoading(true)

			if (!res.credential) throw new Error('Fail to login with Google account.')

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
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<div className="flex justify-center pt-6">
				<GoogleLogin
					size="large"
					width={1000}
					onSuccess={onSuccess}
					text="signup_with"
				/>
			</div>
			{isLoading && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
					<Icons.Loader className="spinner-border text-muted" size={60} />
				</div>
			)}
		</>
	)
}

export default GoogleLoginButton
