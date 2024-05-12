import { TFootballField } from '@/types'
import SearchByNameForm from './components/Form/SearchByNameForm'
import { useEffect, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import { ENV_VARS } from '@/constants/envVars'
import FilterSection from './components/FilterOptions/FilterSection'
import FieldList from './components/FieldList'

const FilterByNameSection = () => {
	const [fields, setFields] = useState<TFootballField[]>([])
	const [name, setName] = useState('')
	const keyword = useDebounce(name)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${ENV_VARS.API_URL}fields?name=${keyword}`,
				)
				if (!response.ok) {
					throw new Error(`API request failed with status ${response.status}`)
				}
				const fields = (await response.json()) as TFootballField[]
				setFields(fields)
			} catch (error) {
				console.error('Error fetching products:', error)
			}
		}
		fetchData()
	}, [keyword])

	console.log(keyword)

	return (
		<section className="mt-6 flex justify-between p-6 ">
			<div>
				<SearchByNameForm setName={setName} />

				<FilterSection />
			</div>
			<FieldList fields={fields} />
		</section>
	)
}

export default FilterByNameSection
