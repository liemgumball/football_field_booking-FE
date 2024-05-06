import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
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
import { login } from '@/services'
import useAuthStore from '@/stores/auth'
import { ERROR_MSG } from '@/constants/message'

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
			setAuth(response.data)
			navigate('/')
		} catch (error) {
			const err = error as AxiosError
			// Unauthorized
			if (err.response?.status === 401) {
				form.setError('email', {
					message: ERROR_MSG.LOGIN_FAILED,
				})
				form.setError('password', {
					message: ERROR_MSG.LOGIN_FAILED,
				})
			} else {
				// Server error
				form.setError('root', {
					message: ERROR_MSG.SERVER_ERROR,
				})
			}
		}
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4">
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
									className="px-2 text-base md:px-4 md:text-lg"
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
									className="px-2 text-base md:px-4 md:text-lg"
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
					disabled={
						form.formState.isSubmitting ||
						(!form.formState.isValid && form.formState.isSubmitted)
					}
					type="submit"
					variant="outline"
					className="px-28 text-base md:text-lg"
				>
					Login
				</Button>
				{/* [ ] css not good, needed design */}
				<FormMessage>{form.formState.errors.root?.message}</FormMessage>
			</form>
		</FormProvider>
	)
}

export default LoginForm
