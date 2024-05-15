import { useParams } from 'react-router-dom'
import TitleDetails from './sections/TitleDetails'
import { useEffect, useState } from 'react'
import { TFootballField } from '@/types'
import { ENV_VARS } from '@/constants/envVars'
import ContentDetails from './sections/ContentDetails'
import Review from './sections/Review'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const FieldDetails = () => {
	// Get field ID
	const { id } = useParams()
	const [field, setField] = useState<TFootballField | undefined>(undefined)

	useDocumentTitle(field ? field.name : 'Field Details')

	useEffect(() => {
		const getFieldDetails = async () => {
			try {
				const response = await fetch(`${ENV_VARS.API_URL}fields/${id}`)
				if (!response.ok) {
					throw new Error(`API request failed with status ${response.status}`)
				}

				const field = (await response.json()) as TFootballField

				setField(field)
			} catch (error) {
				console.error('Error fetching field:', error)
			}
		}

		getFieldDetails()
	}, [id])

	console.log(field)

	return (
		<main className="container my-14">
			<TitleDetails name={field?.name} location={field?.location} />
			<ContentDetails location={field?.location} />
			<Review />
		</main>
	)
}

export default FieldDetails
