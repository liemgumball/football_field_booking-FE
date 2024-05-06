import { Icons } from '@/components/Icons'
import { verifyAccount } from '@/services'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VerifyAccount = () => {
	const { token } = useParams()

	const [error, setError] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		async function verify() {
			try {
				setIsLoading(true)
				if (!token) throw new Error('Not verify token provided')

				const response = await verifyAccount(token)

				if (response.status !== 200) throw response
			} catch (error) {
				if (error instanceof Response) setError(await error.text())

				setError((error as Error).message)
			} finally {
				setIsLoading(false)
			}
		}

		verify()
	}, [token])

	if (isLoading) return <Icons.Loader />

	if (error) return <p className="text-destructive">{error}</p>

	return <p>Verify account successfully</p>
}

export default VerifyAccount
