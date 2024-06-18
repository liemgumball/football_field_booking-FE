// Components
import { Icons } from '@/components/Icons'
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
import { toast } from '@/components/ui/use-toast'
import { resetPassword } from '@/services/user'
import useAuthStore from '@/stores/auth'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const formSchema = z.object({
	email: z.string().email(),
})

const ForgotPassword = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	const navigate = useNavigate()
	const setResetPassword = useAuthStore((state) => state.setResetPassword)

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		try {
			await resetPassword(values.email)

			// navigate('/login')
			toast({
				title: 'An email has been sent to your email address.',
				description: 'Login to your account with the new password provided.',
			})

			navigate('/login')
			setResetPassword(true)
		} catch (error) {
			toast({
				title: 'Fail to reset password.',
				variant: 'destructive',
			})
		}
	}

	const { isSubmitting, isValid, isSubmitted, errors } = form.formState

	return (
		<main className="container my-16 flex w-full items-center justify-center p-4">
			<FormProvider {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full max-w-[600px] space-y-4 py-2 text-start md:min-w-[400px] md:space-y-8"
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
										type="email"
										className="px-2 py-5 text-base md:px-4"
										placeholder="Email"
										{...field}
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
						Reset password
					</Button>
					<FormMessage>{errors.root?.message}</FormMessage>
				</form>
			</FormProvider>
		</main>
	)
}

export default ForgotPassword
