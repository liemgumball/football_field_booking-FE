import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useOutletContext } from 'react-router-dom'
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
import { getNextMonth, getToday, getYesterday } from '@/utils/date'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import { Button } from '@/components/ui/button'
import TimeSelect from '@/components/TimeSelect'
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectItem,
} from '@/components/ui/select'
import { TFootballField } from '@/types'
import { timeSchema } from '@/constants/time'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'

const AvailabilityFieldForm = () => {
	// Field context
	const field = useOutletContext<TFootballField>()
	const { subfields, subfieldIds } = field

	// Validate with Schema
	const formSchema = z
		.object({
			date: z.date(),
			from: timeSchema,
			to: timeSchema,
			subfield: z
				.enum(['undefined', ...subfieldIds.map((i) => i)])
				.transform((val) => (val === 'undefined' ? undefined : val))
				.optional(),
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
			subfield: 'undefined',
		},
	})
	const { isDirty, isSubmitting } = form.formState

	return (
		<Form {...form}>
			<form
				className="mt-4 grid gap-x-2 gap-y-4 rounded-lg bg-popover px-8 py-6 shadow-lg md:grid-cols-2 lg:grid-cols-5"
				onSubmit={form.handleSubmit(() => {})}
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
					name="subfield"
					render={({ field }) => (
						<FormItem>
							<FormLabel>SubFields</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger className="h-11 px-8">
										<SelectValue placeholder="Select subfield" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="undefined">All size</SelectItem>
										{subfields &&
											subfields.map((i) => (
												<SelectItem key={i._id} value={i._id}>
													{i.name}
												</SelectItem>
											))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="from"
					render={({ field }) => (
						<FormItem>
							<FormLabel>From</FormLabel>
							<TimeSelect defaultValue={field.value}>
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
							<TimeSelect defaultValue={field.value}>
								<FormControl>
									<SelectTrigger className="h-11 px-8">
										<SelectValue placeholder="Select time to" />
									</SelectTrigger>
								</FormControl>
							</TimeSelect>
						</FormItem>
					)}
				/>

				<Button
					className="mt-8 max-w-max justify-self-center md:col-start-2 lg:col-start-5"
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

export default AvailabilityFieldForm
