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

// Services
import { signup } from '@/services/user'
import { REGEX } from '@/constants/regex'

const formSchema = z
	.object({
		email: z.string().email(),
		password: z
			.string()
			.min(6, 'Password must contain at least 6 characters')
			.max(20, 'Password must contain maximum 20 characters'),
		confirmPassword: z.string(),
		phoneNumber: z.string().regex(REGEX.PHONE_NUMBER, 'Invalid phone number'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	})

const SignUpForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		try {
			await signup({
				email: values.email,
				password: values.password,
				phoneNumber: values.phoneNumber,
			})

			// TODO handle display successful message
		} catch (error) {
			// TODO handle server error
			// Backend still not have the duplicated response status code
		}
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
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
									placeholder="Enter your email"
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
									placeholder="Enter your password"
									className="px-2 text-base md:px-4 md:text-lg"
									type="password"
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
								Confirm Password
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter to confirm password"
									className="px-2 text-base md:px-4 md:text-lg"
									type="password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base md:text-xl">
								Phone Number
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter to your phone number"
									className="px-2 text-base md:px-4 md:text-lg"
									type="tel"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					disabled={form.formState.isSubmitting}
					type="submit"
					variant="outline"
					className="px-28 text-base md:text-lg"
				>
					Signup
				</Button>
			</form>
		</FormProvider>
	)
}

export default SignUpForm
