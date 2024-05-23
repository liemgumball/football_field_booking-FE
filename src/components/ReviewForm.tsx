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
			<form className="mt-8 w-full max-w-[736px] flex-wrap rounded-lg bg-popover p-4 shadow-xl md:p-7 lg:p-11">
				<p className="mb-4 text-2xl font-semibold">Leave a Comment</p>
				<div className="mb-7 flex flex-col gap-4 lg:flex-row">
					<FormField
						name="email"
						render={() => (
							<FormItem className="w-full lg:w-1/2 ">
								<FormControl className="py-7">
									<Input type="email" placeholder="Email Address" />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						name="username"
						render={() => (
							<FormItem className="w-full lg:w-1/2">
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

				<Button className="mt-7 rounded-full py-8 pl-5 pr-1 lg:pl-10">
					<div className="inline-flex items-center justify-center text-sm font-bold uppercase text-primary-foreground transition-colors md:text-base lg:text-lg ">
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
