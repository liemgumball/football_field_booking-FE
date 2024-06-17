import { useNavigate, useSearchParams } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { formatDate, getNextMonth, getToday, getYesterday } from '@/utils/date'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { TFootballFieldSize } from '@/types'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import { timeSchema } from '@/constants/time'
import { getDuration } from '@/utils/time'
import { PATHS } from '@/constants/navigation'
import TimeSelect from '@/components/TimeSelect'

const AvailabilitySearchForm = ({ className }: { className?: string }) => {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()

	const formSchema = z
		.object({
			date: z.date(),
			size: z
				.enum(['5', '6', '7', '11', 'undefined'])
				.transform((val) => (val === 'undefined' ? undefined : val))
				.optional(),
			from: timeSchema,
			to: timeSchema,
		})
		.refine(({ from, to }) => getDuration(from, to) >= 1, {
			message: 'Duration must as least 1 hour',
			path: ['to'],
		})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			date: searchParams.get('date')
				? new Date(searchParams.get('date') as string)
				: getToday(),
			from: searchParams.get('from') || getInitialFrom(),
			to: searchParams.get('to') || getInitialTo(),
			size: (searchParams.get('size') as TFootballFieldSize) || 'undefined',
		},
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
		const { date, from, to, size } = values

		const searchParams = new URLSearchParams()
		searchParams.set('date', formatDate(date))
		searchParams.set('from', from)
		searchParams.set('to', to)
		if (size) {
			searchParams.set('size', size.toString())
		}

		// Available booking page
		navigate({
			// From Home page navigate to available booking page with search parameters
			pathname: PATHS.AVAILABLE_BOOKING.BASE,
			search: searchParams.toString(),
		})
	}

	return (
		<Form {...form}>
			<form
				className={cn(
					'relative gap-x-2 gap-y-4 px-8 py-2 shadow-lg',
					className,
				)}
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
					name="size"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Size</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger
										className={cn(
											'h-11 px-8',
											!field.value && 'text-muted-foreground',
										)}
									>
										<SelectValue placeholder="Select field size" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="undefined">All size</SelectItem>
										<SelectItem value="5">5</SelectItem>
										<SelectItem value="6">6</SelectItem>
										<SelectItem value="7">7</SelectItem>
										<SelectItem value="11">11</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
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
									<SelectTrigger
										className={cn(
											'h-11  px-8',
											!field.value && 'text-muted-foreground',
										)}
									>
										<SelectValue placeholder="Select time from" />
									</SelectTrigger>
								</FormControl>
							</TimeSelect>
							<FormMessage />
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
									<SelectTrigger
										className={cn(
											'h-11  px-8',
											!field.value && 'text-muted-foreground',
										)}
									>
										<SelectValue placeholder="Select time from" />
									</SelectTrigger>
								</FormControl>
							</TimeSelect>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					className="mt-8 max-w-max self-start justify-self-center md:col-span-2"
					size="lg"
					type="submit"
				>
					Check Availability
				</Button>
			</form>
		</Form>
	)
}

export default AvailabilitySearchForm
