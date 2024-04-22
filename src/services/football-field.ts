import { ENV_VARS } from '@/constants/envVars'
import { TFootballField } from '@/types'

export async function getFieldDetails(
	fieldId: string,
): Promise<TFootballField> {
	const response = await fetch(
		ENV_VARS.API_URL.BASE +
			ENV_VARS.API_URL.FOOTBALL_FIELD.BASE +
			'/' +
			fieldId,
	)

	if (!response.ok) throw new Error('Failed to get location')

	return response.json()
}
