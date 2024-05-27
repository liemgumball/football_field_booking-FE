import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { StatusCodes } from 'http-status-codes'

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
import { Icons } from '@/components/Icons'
import { toast } from '@/components/ui/use-toast'
import { useNavigate } from 'react-router-dom'

/**
 * Form validation Schema
 */
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
	const navigate = useNavigate()
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

			// Successfully
			toast({
				title: 'Sign Up Successful.',
				variant: 'primary',
				description: 'An verify email has been sent to your email address!',
			})

			setTimeout(() => navigate('/login', { replace: true }))
		} catch (error) {
			// Duplicated unique data in database
			if (
				error instanceof Response &&
				error.status === StatusCodes.BAD_REQUEST
			) {
				/**
				 * @example
				 *	[
				 *		{
				 *			"code": "custom",
				 *			"message": "This phone number already in use",
				 *			"path": [
				 *				"body",
				 *				"phoneNumber"
				 *			]
				 *		}
				 *	]
				 */
				const issues = JSON.parse(await error.text()) as unknown as z.ZodIssue[]

				// Set form error following zod issue response from database
				issues.forEach((issue) => {
					form.setError(
						(issue.path[1] as keyof z.infer<typeof formSchema>) || 'root',
						{ message: issue.message },
					)
				})
			} else {
				toast({
					title: 'An error has occurred',
					variant: 'destructive',
				})
			}
		}
	}

	const { isSubmitting, isValid, isSubmitted } = form.formState

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full min-w-[400px] max-w-[600px] space-y-4 p-4 text-start md:space-y-8"
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
									className="px-2 py-5 text-base md:px-4"
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
									className="px-2 py-5 text-base md:px-4"
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
									className="px-2 py-5 text-base md:px-4"
									type="tel"
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
					Sign Up
				</Button>
			</form>
		</FormProvider>
	)
}

export default SignUpForm
