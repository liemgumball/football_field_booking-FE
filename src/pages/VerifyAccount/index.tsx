import { Icons } from '@/components/Icons'
import { verifyAccount } from '@/services/user'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NotFound from '../NotFound'
import { buttonVariants } from '@/components/ui/button'
import ResendVerifyForm from './components/ResendVerifyForm'
import { PATHS } from '@/constants/navigation'

const VerifyAccount = () => {
	const { token } = useParams()

	const [error, setError] = useState<{
		status?: number
		message: string
	} | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isSuccess, setIsSuccess] = useState<boolean>(false)

	useEffect(() => {
		async function verify() {
			try {
				setIsLoading(true)
				if (!token) throw new Error('No verify token provided')

				const response = await verifyAccount(token)

				if (response.status !== 200) throw response

				setIsSuccess(true)
			} catch (error) {
				if (error instanceof Response) {
					setError({ message: await error.text(), status: error.status })
					return
				}

				setError({ message: (error as Error).message })
			} finally {
				setIsLoading(false)
			}
		}

		verify()
	}, [token])

	if (isLoading)
		return (
			<div className="container my-16 max-w-min xl:my-auto">
				<Icons.Loader size={70} className="mr-2" />
				<span className="mt-4 text-2xl text-muted-foreground xl:text-3xl">
					Verifying...
				</span>
			</div>
		)

	if (error)
		return (
			<div className="container my-16 space-y-16 text-center xl:my-auto">
				<p className="mb-4 truncate text-center text-3xl font-bold capitalize text-destructive xl:text-4xl">
					{error.message}
				</p>
				{error.status === 403 && <ResendVerifyForm />}
			</div>
		)

	if (isSuccess)
		return (
			<div className="container my-16 space-y-16 text-center xl:my-auto">
				<p className=" text-3xl font-bold capitalize text-primary xl:text-4xl">
					{
						<Icons.Success className="mr-2 inline-block size-12 font-bold xl:size-16 xl:text-4xl" />
					}
					Verify account successfully
				</p>

				<Link to={PATHS.LOGIN} className={buttonVariants()}>
					Go to Login
				</Link>
			</div>
		)

	return <NotFound />
}

export default VerifyAccount
