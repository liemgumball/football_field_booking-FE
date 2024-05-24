import { useSearchParams } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getDuration } from '@/utils/time'

// Components
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { formatDate, getNextMonth, getToday, getYesterday } from '@/utils/date'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import { Button } from '@/components/ui/button'
import TimeSelect from '@/components/TimeSelect'
import { SelectTrigger, SelectValue } from '@/components/ui/select'
import { timeSchema } from '@/constants/time'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'

const FieldAvailabilityForm = () => {
	// Validate with Schema
	const formSchema = z
		.object({
			date: z.date(),
			from: timeSchema,
			to: timeSchema,
		})
		.refine(({ from, to }) => getDuration(from, to) >= 1, {
			message: 'To must after From as least 1 hour',
			path: ['to'],
		})

	// Form controls
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			date: getToday(),
			from: getInitialFrom(),
			to: getInitialTo(),
		},
	})
	const { isDirty, isSubmitting } = form.formState

	const [, setSearchParams] = useSearchParams()
	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
		const searchParams = new URLSearchParams()
		searchParams.set('date', formatDate(values.date))
		searchParams.set('from', values.from)
		searchParams.set('to', values.to)

		setSearchParams(searchParams.toString())
	}

	return (
		<Form {...form}>
			<form
				className="mt-4 grid gap-x-2 gap-y-4 rounded-lg bg-popover px-8 py-6 shadow-lg md:grid-cols-2 lg:grid-cols-4"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name="date"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Date</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											size="lg"
											variant={'outline'}
											className={cn(
												'flex h-11 w-full text-left font-normal',
												!field.value && 'text-muted-foreground',
											)}
										>
											{field.value ? (
												format(field.value, 'PPP')
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) =>
											date < getYesterday() || date > getNextMonth()
										}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="from"
					render={({ field }) => (
						<FormItem>
							<FormLabel>From</FormLabel>
							<TimeSelect
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger className="h-11 px-8">
										<SelectValue placeholder="Select time from" />
									</SelectTrigger>
								</FormControl>
							</TimeSelect>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="to"
					render={({ field }) => (
						<FormItem>
							<FormLabel>To</FormLabel>
							<TimeSelect
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger className="h-11 px-8">
										<SelectValue placeholder="Select time to" />
									</SelectTrigger>
								</FormControl>
							</TimeSelect>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					className="mt-8 max-w-max justify-self-center"
					size="lg"
					disabled={isSubmitting || !isDirty}
					type="submit"
				>
					Check Availability
				</Button>
			</form>
		</Form>
	)
}

export default FieldAvailabilityForm
