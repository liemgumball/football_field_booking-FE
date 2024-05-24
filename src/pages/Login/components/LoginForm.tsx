import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

// Components
import { Button } from '@/components/ui/button'
import {
	Form as FormProvider,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

// Utils
import { login } from '@/services/user'
import useAuthStore from '@/stores/auth'
import { ERROR_MSG } from '@/constants/message'
import { Icons } from '@/components/Icons'

const formSchema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(6, 'Password must contain at least 6 characters')
		.max(20, 'Password must contain maximum 20 characters'),
})

const LoginForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	const setAuth = useAuthStore((set) => set.set)
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		try {
			const response = await login(values)
			if (response) {
				setAuth(response)
				navigate('/')
			}
		} catch (error) {
			const err = error as Response
			// Unauthorized
			if (err.status === 401) {
				form.setError('email', {
					message: ERROR_MSG.LOGIN_FAILED,
				})
				form.setError('password', {
					message: ERROR_MSG.LOGIN_FAILED,
				})
				return
			} else if (err.status === 403) {
				form.setError('root', {
					message: ERROR_MSG.ACCOUNT_NOT_VERIFIED,
				})
				return
			} else {
				// Server error
				form.setError('root', {
					message: ERROR_MSG.SERVER_ERROR,
				})
			}
		}
	}

	const { isSubmitting, isValid, isSubmitted, errors } = form.formState

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full min-w-[400px] max-w-[600px] space-y-4 px-4 text-start md:space-y-8"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base md:text-xl">
								Email Address
							</FormLabel>
							<FormControl>
								<Input
									className="px-2 py-5 text-base md:px-4"
									placeholder="Email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base md:text-xl">Password</FormLabel>
							<FormControl>
								<Input
									className="px-2 py-5 text-base md:px-4"
									placeholder="Enter your password"
									type="password"
									{...field}
									maxLength={25}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					disabled={isSubmitting || (!isValid && isSubmitted)}
					type="submit"
					className="w-full text-base"
				>
					{isSubmitting && (
						<Icons.Loader className="mr-1 text-primary-foreground" />
					)}
					Login
				</Button>
				<FormMessage>{errors.root?.message}</FormMessage>
			</form>
		</FormProvider>
	)
}

export default LoginForm
