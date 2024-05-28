import { googleLogin } from '@/services/user'
import useAuthStore from '@/stores/auth'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from './ui/use-toast'
import { Icons } from './Icons'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'
import useMediaQuery from '@/hooks/useMediaQuery'

const GoogleLoginButton = () => {
	const setAuth = useAuthStore((state) => state.set)
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState(false)

	const width = useMediaQuery('(min-width: 768px)') ? 380 : 256

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
			// Client side error
			if (error instanceof Error)
				toast({ title: error.message, variant: 'destructive' })

			// Response error from Backend
			if (error instanceof Response) {
				// Duplicate email case
				if (error.status === StatusCodes.BAD_REQUEST) {
					/**
					 * @example
					 *	[
					 *		{
					 *			"code": "custom",
					 *			"message": "This email already in use",
					 *			"path": [
					 *				"body",
					 *				"email"
					 *			]
					 *		}
					 *	]
					 */
					const issues = (await error.json()) as unknown as z.ZodIssue[]

					// Display duplicate email message
					toast({
						title: issues.at(0)?.message,
					})
				} else toast({ title: await error.text() }) // others error response case
			}
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<div className="flex justify-center pt-6">
				<GoogleLogin
					size="medium"
					width={width}
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
