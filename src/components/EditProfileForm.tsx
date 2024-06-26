import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

// Components
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'

// Utils
import { REGEX } from '@/constants/regex'
import useAuthStore from '@/stores/auth'
import { getUser, updateUser } from '@/services/user'
import { Loader2Icon } from 'lucide-react'
import { Link } from 'react-router-dom'

const formSchema = z.object({
	name: z.string().min(4),
	phoneNumber: z
		.string({
			required_error: 'Phone number is required',
		})
		.regex(REGEX.PHONE_NUMBER, 'Invalid phone number'),
})

const EditProfileForm = ({ close }: { close: () => void }) => {
	const user = useAuthStore((set) => set.user)
	const setAuth = useAuthStore((set) => set.set)
	if (!user) throw new Error('User not found')

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: user.name,
			phoneNumber: user.phoneNumber,
		},
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
		try {
			await updateUser(user._id, data)
			const newUser = await getUser(user._id)

			setAuth(newUser)
			close()
		} catch (error) {
			if (error instanceof Response)
				form.setError('root', { message: await error.text() })
		}
	}

	const { isSubmitting, isDirty } = form.formState

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-y-6 px-2 py-5"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Enter your name" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input placeholder="Enter your phone number" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={!isDirty || isSubmitting}>
					{isSubmitting && <Loader2Icon className="mr-3 animate-spin" />}
					Save Changes
				</Button>
				<FormMessage>{form.formState.errors.root?.message}</FormMessage>
				{!user.googleId && (
					<Button asChild className="mb-2 w-full" variant="secondary">
						<Link to="change-password" onClick={() => close()}>
							Change Password
						</Link>
					</Button>
				)}
			</form>
		</Form>
	)
}

export default EditProfileForm
