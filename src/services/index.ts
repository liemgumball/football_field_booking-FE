import { ENV_VARS } from '@/constants/envVars'
import axios from 'axios'

const api = axios.create({
	baseURL: ENV_VARS.API_URL.BASE,
	timeout: 10000,
})

export const login = (data: { email: string; password: string }) =>
	api.post(ENV_VARS.API_URL.AUTH.LOGIN, data)

export const signup = (data: {
	email: string
	password: string
	phoneNumber: string
}) => api.post(ENV_VARS.API_URL.AUTH.SIGNUP, data)
