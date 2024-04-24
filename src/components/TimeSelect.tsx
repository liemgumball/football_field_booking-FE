import { Select, SelectContent, SelectGroup, SelectItem } from './ui/select'
import { SelectProps } from '@radix-ui/react-select'
import { timeValues } from '@/constants/time'

const TimeSelect = (props: SelectProps) => {
	const { children, ...rest } = props

	return (
		<Select {...rest}>
			{children}
			<SelectContent>
				<SelectGroup>
					{timeValues.map((time) => (
						<SelectItem key={time} value={time}>
							{time}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default TimeSelect
