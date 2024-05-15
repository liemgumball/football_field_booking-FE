import { TFootballField } from '@/types'
import apiRequest from './common'

export const getFieldDetails = (fieldId: string) =>
	apiRequest(`fields/${fieldId}`)

export const getBestFields = () =>
	apiRequest('fields/bests?limit=4') as Promise<TFootballField[]>
