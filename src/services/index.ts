import { ENV_VARS } from '@/constants/envVars'
import { TUser } from '@/types'
import axios from 'axios'

const api = axios.create({
	baseURL: ENV_VARS.API_URL.BASE,
	timeout: 10000,
})

export const login = async (data: {
	email: string
	password: string
}): Promise<TUser> => (await api.post(ENV_VARS.API_URL.AUTH.LOGIN, data)).data
