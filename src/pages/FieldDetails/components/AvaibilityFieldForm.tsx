import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { getToday } from '@/utils/date'
import { useForm } from 'react-hook-form'
// import z from 'zod'
import { Input } from '@/components/ui/input'
import { getInitialFrom, getInitialTo } from '@/utils/booking'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useOutletContext } from 'react-router-dom'
import { ContextFieldType } from '..'
import TimeSelect from '@/components/TimeSelect'
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectItem,
} from '@/components/ui/select'
// import { timeSchema } from "@/constants/time"

const AvaibilityFieldForm = () => {
	const { field } = useOutletContext<ContextFieldType>()

	const subfieldNames = field?.subfields?.map((subfield) => subfield.name)

	// const formSchema = z.object({
	//     date: z.date(),
	//     from: timeSchema,
	//     to: timeSchema

	// })

	const form = useForm({
		defaultValues: {
			date: getToday(),
			from: getInitialFrom(),
			to: getInitialTo(),
			subfields: subfieldNames,
		},
	})

	return (
		<Form {...form}>
			<form className="mt-8 max-w-[736px] flex-wrap bg-popover p-4 shadow-xl md:p-7 lg:p-11">
				<div className="flex flex-col gap-4 lg:flex-row">
					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem className="w-full lg:w-1/2">
								<FormLabel>Date</FormLabel>
								<FormControl className="py-7">
									<Input value={format(field.value, 'PPP')} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="subfields"
						render={({ field }) => (
							<FormItem className="w-full lg:w-1/2">
								<FormLabel>SubFields</FormLabel>
								<Select defaultValue={field.value && field.value[0]}>
									<FormControl className="py-7">
										<SelectTrigger>
											<SelectValue placeholder="Select subfield" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectGroup>
											{field.value &&
												field.value?.map((value) => (
													<SelectItem key={value} value={value}>
														{value}
													</SelectItem>
												))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>
				<div className="mt-7 flex flex-col gap-4 lg:flex-row">
					<FormField
						control={form.control}
						name="from"
						render={({ field }) => (
							<FormItem className="w-full lg:w-1/2">
								<FormLabel>From</FormLabel>
								<TimeSelect defaultValue={field.value}>
									<FormControl className="py-7">
										<SelectTrigger>
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
							<FormItem className="w-full lg:w-1/2">
								<FormLabel>To</FormLabel>
								<TimeSelect defaultValue={field.value}>
									<FormControl className="py-7">
										<SelectTrigger>
											<SelectValue placeholder="Select time to" />
										</SelectTrigger>
									</FormControl>
								</TimeSelect>
							</FormItem>
						)}
					/>
				</div>

				<Button className="mt-7 rounded-full py-8 pl-5 pr-1 lg:pl-10">
					<div className="inline-flex items-center justify-center text-sm font-bold uppercase text-primary-foreground transition-colors md:text-base lg:text-lg ">
						check available
						<div className="ml-5 rounded-full bg-primary-foreground p-4 text-primary ">
							<Check />
						</div>
					</div>
				</Button>
			</form>
		</Form>
	)
}

export default AvaibilityFieldForm
