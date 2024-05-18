import { Select, SelectContent, SelectGroup, SelectItem } from './ui/select'
import { SelectProps } from '@radix-ui/react-select'
import { timeValues } from '@/constants/time'
import { TTimeStep } from '@/types'

const TimeSelect = (
	props: SelectProps & {
		valueList?: TTimeStep[]
		disabledList?: Partial<TTimeStep[]>
	},
) => {
	const { children, valueList, disabledList, ...rest } = props

	return (
		<Select {...rest}>
			{children}
			<SelectContent>
				<SelectGroup>
					{(valueList || timeValues).map((time) => (
						<SelectItem
							key={time}
							value={time}
							disabled={disabledList?.includes(time)}
						>
							{time}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default TimeSelect
