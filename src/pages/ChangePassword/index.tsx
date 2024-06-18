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
import { changePassword } from '@/services/user'
import useAuthStore from '@/stores/auth'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const formSchema = z
	.object({
		oldPassword: z
			.string()
			.min(6, 'Password must contain at least 6 characters')
			.max(20, 'Password must contain maximum 20 characters'),
		newPassword: z
			.string()
			.min(6, 'Password must contain at least 6 characters')
			.max(20, 'Password must contain maximum 20 characters'),
		confirmPassword: z
			.string()
			.min(6, 'Password must contain at least 6 characters')
			.max(20, 'Password must contain maximum 20 characters'),
	})
	.refine((data) => data.oldPassword !== data.newPassword, {
		message: 'New password must be different from old password',
		path: ['newPassword'],
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	})

const ChangePassword = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	const navigate = useNavigate()
	const auth = useAuthStore()
	const user = auth.user

	if (!user) throw new Error('Invalid user')

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		try {
			await changePassword(user.email, values.oldPassword, values.newPassword)

			toast({
				title: 'Your password has been updated!',
				variant: 'primary',
			})

			navigate('/')
			auth.setResetPassword(false)
		} catch (error) {
			if (error instanceof Response)
				toast({
					title: 'Fail to change password.',
					description: await error.text(),
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
						name="oldPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base md:text-xl">
									Old Password
								</FormLabel>
								<FormControl>
									<Input
										type="password"
										className="px-2 py-5 text-base md:px-4"
										placeholder="Old password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="newPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base md:text-xl">
									New Password
								</FormLabel>
								<FormControl>
									<Input
										type="password"
										className="px-2 py-5 text-base md:px-4"
										placeholder="New password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base md:text-xl">
									Confirm New Password
								</FormLabel>
								<FormControl>
									<Input
										type="password"
										className="px-2 py-5 text-base md:px-4"
										placeholder="Confirm new password"
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
						Change password
					</Button>
					<FormMessage>{errors.root?.message}</FormMessage>
				</form>
			</FormProvider>
		</main>
	)
}

export default ChangePassword
