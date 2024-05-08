import apiRequest from './common'

export const getFieldDetails = (fieldId: string) =>
	apiRequest(`fields/${fieldId}`)
