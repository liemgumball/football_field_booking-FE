import { TFootballField, TRating } from '@/types'
import { useEffect, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import { ENV_VARS } from '@/constants/envVars'
import FieldList from './components/FieldList.tsx'
import SkeletonField from './components/SkeletonField.tsx'
import FilterForm from './components/Form/FilterForm.tsx'

const FilterByNameSection = () => {
	const [fields, setFields] = useState<TFootballField[]>([])
	const [name, setName] = useState('')
	const [rating, setRating] = useState<TRating | undefined>(undefined)
	const keyword = useDebounce(name)
	const ratingDebounce = useDebounce(rating)

	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		const fetchData = async () => {
			try {
				const response = await fetch(
					`${ENV_VARS.API_URL}fields?name=${keyword}&rating=${ratingDebounce}`,
				)
				if (!response.ok) {
					throw new Error(`API request failed with status ${response.status}`)
				}
				const fields = (await response.json()) as TFootballField[]
				setFields(fields)
				setIsLoading(false)
			} catch (error) {
				console.error('Error fetching fields:', error)
			}
		}
		fetchData()
	}, [keyword, ratingDebounce])

	return (
		<section className="container mt-6 flex flex-col justify-between p-6 xl:flex-row ">
			<div>
				<FilterForm setName={setName} rating={rating} setRating={setRating} />
			</div>
			{isLoading ? (
				<div className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-5  md:grid-cols-2 lg:grid-cols-3">
					{Array(6)
						.fill(null)
						.map((_, index) => (
							<SkeletonField key={index} />
						))}
				</div>
			) : (
				<FieldList fields={fields} />
			)}
		</section>
	)
}

export default FilterByNameSection
