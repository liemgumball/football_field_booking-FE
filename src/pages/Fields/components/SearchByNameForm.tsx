import { SearchIcon } from 'lucide-react'

const SearchByNameForm = ({
	setName,
}: {
	setName: React.Dispatch<React.SetStateAction<string>>
}) => {
	return (
		<form className="relative">
			<input
				className="appearance-none border-2 border-solid border-green-600 px-8 py-6 text-lg text-black outline-none"
				type="text"
				placeholder="Search Here"
				maxLength={20}
				onChange={(e) => {
					setName(e.target.value)
				}}
			/>
			<button className="absolute right-2 top-7 text-black">
				<SearchIcon />
			</button>
		</form>
	)
}

export default SearchByNameForm
