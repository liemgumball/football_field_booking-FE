import { Input } from '@/components/ui/input'
import { memo } from 'react'

const InputSearch = ({
	setName,
}: {
	setName: React.Dispatch<React.SetStateAction<string>>
}) => {
	return (
		<Input
			className="appearance-none border-2 border-solid px-2 py-1 text-start text-base outline-none md:w-auto md:px-4  md:py-2 md:text-xl lg:px-6 lg:py-4 lg:text-lg "
			type="text"
			placeholder="Search Here"
			maxLength={20}
			onChange={(e) => {
				setName(e.target.value)
			}}
		/>
	)
}

export default memo(InputSearch)
