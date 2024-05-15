import { useParams } from 'react-router-dom'
import TitleFieldDetails from './TitleFieldDetails'
import { useEffect, useState } from 'react'
import { TFootballField } from '@/types'
import { ENV_VARS } from '@/constants/envVars'
import ContentFieldDetails from './ContentFieldDetails'

const FieldDetails = () => {
	const { id } = useParams()
	const [field, setField] = useState<TFootballField | undefined>(undefined)

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

	return (
		<main className="container my-14">
			<TitleFieldDetails
				name={field?.name}
				location={field?.location}
				rating={field?.rating}
			/>
			<ContentFieldDetails location={field?.location} images={field?.images} />
		</main>
	)
}

export default FieldDetails
