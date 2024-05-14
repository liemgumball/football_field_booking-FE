import { SearchIcon } from 'lucide-react'

const SearchByNameForm = ({
	setName,
}: {
	setName: React.Dispatch<React.SetStateAction<string>>
}) => {
	return (
		<form className="relative text-center lg:text-start">
			<input
				className="appearance-none border-2 border-solid border-green-600 px-2 py-1 text-base text-black outline-none md:px-4 md:py-2 lg:px-6 lg:py-4 lg:text-lg"
				type="text"
				placeholder="Search Here"
				maxLength={20}
				onChange={(e) => {
					setName(e.target.value)
				}}
			/>
			<button className="absolute left-52 top-1.5 text-black md:left-[430px] md:top-2.5 lg:right-2 lg:top-5">
				<SearchIcon />
			</button>
		</form>
	)
}

export default SearchByNameForm
