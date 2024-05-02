import { ENV_VARS } from '@/constants/envVars'
import { TUser } from '@/types'
import axios, { AxiosResponse } from 'axios'

export const api = axios.create({
	baseURL: ENV_VARS.API_URL.BASE,
	timeout: 10000,
})

export const login = (data: {
	email: string
	password: string
}): Promise<AxiosResponse<TUser>> =>
	api.post(ENV_VARS.API_URL.AUTH.LOGIN, data, {
		withCredentials: true,
	})

export const signup = (data: {
	email: string
	password: string
	phoneNumber: string
}) => api.post(ENV_VARS.API_URL.AUTH.SIGNUP, data)

export const updateUser = (
	id: string,
	data: Partial<TUser>,
): Promise<AxiosResponse<unknown>> =>
	api.patch(ENV_VARS.API_URL.USER.BASE + `/${id}`, data, {
		withCredentials: true,
	})

export const getUser = (id: string): Promise<AxiosResponse<TUser>> =>
	api.get(ENV_VARS.API_URL.USER.BASE + `/${id}`, { withCredentials: true })
