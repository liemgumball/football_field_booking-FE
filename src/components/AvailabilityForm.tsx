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
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from './ui/calendar'
import { formatDate, getNextMonth, getToday, getYesterday } from '@/utils/date'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { TFootballFieldSize } from '@/types'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import { timeSchema } from '@/constants/time'
import TimeSelect from './TimeSelect'
import { getDuration } from '@/utils/time'
import { PATHS } from '@/constants/navigation'

const AvailabilityForm = ({
	className,
	isNavigate,
}: {
	className?: string
	isNavigate?: boolean
}) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const navigate = useNavigate()

	// Check if can use location or not
	const isLocationSearch =
		searchParams.get('location') === 'true' ? true : false

	const formSchema = z
		.object({
			date: z.date(),
			size: z
				.enum(['5', '6', '7', '11', 'undefined'])
				.transform((val) => (val === 'undefined' ? undefined : val))
				.optional(),
			from: timeSchema,
			to: timeSchema,
			location: z.boolean().default(isLocationSearch),
			distance: z.number().optional().default(10),
		})
		.refine(({ from, to }) => getDuration(from, to) >= 1, {
			message: 'To must after From as least 1 hour',
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
			location: isLocationSearch,
		},
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
		const { date, from, to, location, size } = values

		const searchParams = new URLSearchParams()
		searchParams.set('date', formatDate(date))
		searchParams.set('from', from)
		searchParams.set('to', to)
		searchParams.set('location', `${location}`)
		if (size) {
			searchParams.set('size', size.toString())
		}

		// Available booking page
		if (!isNavigate) setSearchParams(searchParams.toString())
		else
			navigate({
				// From Home page navigate to available booking page with search parameters
				pathname: PATHS.AVAILABLE_BOOKING.BASE,
				search: searchParams.toString(),
			})
	}

	const { isSubmitting, isDirty } = form.formState
	return (
		<Form {...form}>
			<form
				className={cn(
					'relative gap-x-2 gap-y-4 px-8 py-6 shadow-lg',
					className,
				)}
				onSubmit={form.handleSubmit(onSubmit)}
			>
				{!isNavigate && (
					<FormField
						control={form.control}
						name="location"
						render={({ field }) => (
							<FormItem className="absolute right-5 top-1 flex flex-row items-start space-x-2 space-y-0 rounded-md p-4">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel className="text-xs text-muted-foreground">
										Optimize by your location
									</FormLabel>
								</div>
							</FormItem>
						)}
					/>
				)}
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
					className="mt-8 max-w-max self-start justify-self-center md:col-end-auto"
					size="lg"
					disabled={isSubmitting || (!isDirty && !isNavigate)}
					type="submit"
				>
					Check Availability
				</Button>
			</form>
		</Form>
	)
}

export default AvailabilityForm
