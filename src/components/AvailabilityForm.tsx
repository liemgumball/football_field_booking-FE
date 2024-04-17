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
import { CalendarIcon } from 'lucide-react'
import { Calendar } from './ui/calendar'
import { getNextMonth, getToday, getYesterday } from '@/utils/date'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from './ui/input-otp'
import { Checkbox } from '@/components/ui/checkbox'
import { TFootballFieldSize } from '@/types'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import useLocationStore from '@/stores/location'

const AvailabilityForm = ({ className }: { className?: string }) => {
	const coordinates = useLocationStore((set) => set.coordinates)
	const [searchParams, setSearchParams] = useSearchParams()

	const isLocationSearch =
		searchParams.get('location') === 'false'
			? false
			: coordinates
				? true
				: false

	const formSchema = z.object({
		date: z.date(),
		size: z.enum(['5', '6', '7', '11']).optional(),
		from: z.string(),
		to: z.string(),
		location: z.boolean().default(isLocationSearch),
		distance: z.number().optional().default(10),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			date: searchParams.get('date')
				? new Date(searchParams.get('date') as string)
				: getToday(),
			from: searchParams.get('from') || getInitialFrom(),
			to: searchParams.get('to') || getInitialTo(),
			size: (searchParams.get('size') as TFootballFieldSize) || undefined,
			location: isLocationSearch,
		},
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
		const searchParams = new URLSearchParams()
		searchParams.set('date', values.date.toISOString())
		searchParams.set('from', values.from)
		searchParams.set('to', values.to)
		searchParams.set('location', `${values.location}`)
		if (values.size) {
			searchParams.set('size', values.size.toString())
		}

		setSearchParams(searchParams.toString())
	}

	return (
		<Form {...form}>
			<form
				className={cn('relative gap-8 p-4', className)}
				onSubmit={form.handleSubmit(onSubmit)}
			>
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
												'flex min-w-[220px] text-left font-normal',
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
											'min-w-[220px] px-8',
											!field.value && 'text-muted-foreground',
										)}
									>
										<SelectValue placeholder="Select field size" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectGroup>
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
							<FormControl>
								<InputOTP maxLength={4} {...field}>
									<InputOTPGroup>
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
									</InputOTPGroup>
									<InputOTPSeparator />
									<InputOTPGroup>
										<InputOTPSlot index={2} />
										<InputOTPSlot index={3} />
									</InputOTPGroup>
								</InputOTP>
							</FormControl>
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
							<FormControl>
								<InputOTP maxLength={4} {...field}>
									<InputOTPGroup>
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
									</InputOTPGroup>
									<InputOTPSeparator />
									<InputOTPGroup>
										<InputOTPSlot index={2} />
										<InputOTPSlot index={3} />
									</InputOTPGroup>
								</InputOTP>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					className="col-auto mt-8"
					size="lg"
					disabled={form.formState.isSubmitting}
					type="submit"
				>
					Check Availability
				</Button>
			</form>
		</Form>
	)
}

export default AvailabilityForm
