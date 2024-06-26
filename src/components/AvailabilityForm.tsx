import { useSearchParams } from 'react-router-dom'
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
import { CalendarIcon, SearchIcon } from 'lucide-react'
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
import { TViewPort, TFootballFieldSize } from '@/types'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import { timeSchema } from '@/constants/time'
import TimeSelect from './TimeSelect'
import { getDuration } from '@/utils/time'
import { Icons } from './Icons'
import LocationSearch from './LocationSearch'
import { Checkbox } from './ui/checkbox'
import { Input } from './ui/input'

type TProps = {
	defaultViewPort: TViewPort
	setViewPort: React.Dispatch<React.SetStateAction<TViewPort>>
	radius: number
}

const AvailabilityForm = ({
	isFetching,
	defaultViewPort,
	setViewPort,
	radius,
}: {
	isFetching?: boolean
} & TProps) => {
	const [searchParams, setSearchParams] = useSearchParams()

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
			searchString: z.string().trim().optional(),
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
			location: isLocationSearch,
		},
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
		const { date, from, to, location, size, searchString } = values

		const searchParams = new URLSearchParams()
		searchParams.set('date', formatDate(date))
		searchParams.set('from', from)
		searchParams.set('to', to)
		searchParams.set('location', `${location}`)
		if (size) {
			searchParams.set('size', size.toString())
		}
		if (searchString) {
			searchParams.set('search', searchString)
		}

		// Available booking page
		setSearchParams(searchParams.toString())
	}

	const { isSubmitting, isSubmitted } = form.formState
	return (
		<Form {...form}>
			<form
				className="container relative my-10  grid grid-cols-1 gap-x-2 gap-y-4 rounded-xl bg-popover px-4 py-2 pb-6 pt-10 shadow-lg md:grid-cols-2 lg:grid-cols-3"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name="searchString"
					render={({ field }) => (
						<FormItem className="md:col-span-2 lg:col-span-1 lg:mt-0">
							<FormLabel>Search</FormLabel>
							<FormControl>
								<div className="relative">
									<SearchIcon
										className="absolute left-4 top-3 text-muted-foreground"
										size={20}
									/>
									<Input {...field} className="h-11 pl-12" />
								</div>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="location"
					render={({ field }) => (
						<FormItem className="absolute right-1 top-1 flex flex-row items-center space-x-2 space-y-0 rounded-md p-4">
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<FormLabel>
								<LocationSearch
									disabled={!field.value || !isSubmitted}
									viewPort={defaultViewPort}
									setViewPort={setViewPort}
									radius={radius}
								/>
							</FormLabel>
						</FormItem>
					)}
				/>
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
					className="mt-8 max-w-max self-start justify-self-center md:col-span-2 lg:col-start-3 lg:row-start-1"
					size="lg"
					disabled={isSubmitting || isFetching}
					type="submit"
				>
					{isFetching && <Icons.Loader className="mr-1" />}
					Check Availability
				</Button>
			</form>
		</Form>
	)
}

export default AvailabilityForm
