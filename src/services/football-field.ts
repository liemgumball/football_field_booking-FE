import { TFootballField, TMarker } from '@/types'
import apiRequest from './common'

export const getFieldDetails = (fieldId: string) =>
	apiRequest(`fields/${fieldId}`)

export const getBestFields = () =>
	apiRequest('fields/bests?limit=4') as Promise<TFootballField[]>

export const getFieldsByLocation = (
	longitude: number,
	latitude: number,
	distance?: number,
): Promise<TMarker[]> =>
	apiRequest(
		`fields/locations?latitude=${latitude}&longitude=${longitude}${distance ? '&distance=' + distance : ''}`,
	)
