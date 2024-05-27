import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SendHorizonalIcon } from 'lucide-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import RatingInput from '../../../components/RatingInput'
import { TReview } from '@/types'
import useBookingMutation from '../hooks/useBookingMutation'
import { toast } from '@/components/ui/use-toast'
import { Icons } from '@/components/Icons'

const formSchema = z.object({
	rating: z.number().int().min(1).max(5),
	description: z.string().optional(),
})

const ReviewForm = ({ review, id }: { id: string; review?: TReview }) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: review || { rating: 0, description: undefined },
	})
	const { isSubmitting, isDirty } = form.formState

	const { mutateAsync } = useBookingMutation(id)

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		try {
			await mutateAsync({ review: values })

			toast({
				title: 'Update review successfully',
				variant: 'primary',
			})
		} catch (error) {
			if (error instanceof Response)
				toast({ title: await error.text(), variant: 'destructive' })
		}
	}

	return (
		<div className="md:px-12">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="container w-full space-y-4 rounded-lg bg-popover py-6 shadow-xl "
				>
					<p className="mb-4 text-3xl font-semibold">Leave a Comment</p>
					<FormField
						control={form.control}
						name="rating"
						render={({ field }) => (
							<FormItem className="flex items-center gap-2">
								<FormLabel className="text-base">Rating</FormLabel>
								<FormControl>
									<RatingInput value={field.value} onChange={field.onChange} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Textarea
										className="px-2 py-5 text-base md:px-4"
										placeholder="Enter your description"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						className="rounded-full py-8 pl-5 pr-1 lg:pl-10"
						disabled={isSubmitting || !isDirty}
					>
						<div className="inline-flex items-center justify-center text-sm font-bold uppercase text-primary-foreground transition-colors md:text-base lg:text-lg ">
							{isSubmitting && <Icons.Loader className="mr-1" />}
							send comments
							<div className="ml-5 rounded-full bg-primary-foreground p-4 text-primary ">
								<SendHorizonalIcon />
							</div>
						</div>
					</Button>
				</form>
			</Form>
		</div>
	)
}
export default ReviewForm
