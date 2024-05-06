import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { resendVerifyEmail } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const formSchema = z.object({
	email: z.string().email(),
})

const ResendVerifyForm = () => {
	const navigate = useNavigate()
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		try {
			const response = await resendVerifyEmail(values.email)

			if (response.status !== 201) throw response
		} catch (error) {
			const err = error as AxiosError

			// Already verified
			if (err.status === 417) navigate('/login')

			form.setError('root', {
				message: err.response?.data as string,
			})
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="container flex min-w-max flex-col gap-y-6 p-1 md:max-w-[500px]"
			>
				<Separator />
				<p className="text-center font-medium capitalize text-accent-foreground">
					Let resend to your signed up email
				</p>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Enter your email address" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					disabled={
						form.formState.isSubmitting || form.formState.isSubmitSuccessful
					}
				>
					{form.formState.isSubmitting && <Icons.Loader className="mr-2" />}
					{form.formState.isSubmitSuccessful ? 'Sent' : 'Send'}
				</Button>
				{form.formState.errors.root && (
					<FormMessage>{form.formState.errors.root.message}</FormMessage>
				)}
			</form>
		</Form>
	)
}

export default ResendVerifyForm
