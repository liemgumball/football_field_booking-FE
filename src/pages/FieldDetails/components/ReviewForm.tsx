import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { SendHorizonalIcon } from 'lucide-react'

const ReviewForm = () => {
	const form = useForm({
		defaultValues: {
			email: '',
			username: '',
			comment: '',
		},
	})
	return (
		<Form {...form}>
			<form className="mt-8 max-w-[736px] flex-wrap bg-popover px-11 py-11">
				<p className="mb-4 text-2xl font-semibold">Leave a Comment</p>
				<div className="mb-7 flex gap-4">
					<FormField
						name="email"
						render={() => (
							<FormItem className="w-1/2 ">
								<FormControl className="py-7">
									<Input type="email" placeholder="Email Address" />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						name="username"
						render={() => (
							<FormItem className="w-1/2">
								<FormControl className="py-7">
									<Input type="text" placeholder="Enter Name" />
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<FormField
					name="comment"
					render={() => (
						<FormItem className="mb-7">
							<FormControl>
								<Textarea className="h-[100px]" placeholder="Write Comment" />
							</FormControl>
						</FormItem>
					)}
				/>

				<Button className="mt-7 rounded-full py-8 pl-10 pr-1">
					<div className="inline-flex items-center justify-center text-lg font-bold uppercase text-primary-foreground transition-colors ">
						send comments
						<div className="ml-5 rounded-full bg-primary-foreground p-4 text-primary ">
							<SendHorizonalIcon />
						</div>
					</div>
				</Button>
			</form>
		</Form>
	)
}
export default ReviewForm
