import { TUser } from '@/types'
import apiRequest from './common'

export const login = (data: { email: string; password: string }) =>
	apiRequest('auth/login', {
		method: 'POST',
		data,
		withCredentials: true,
	})

export const signup = (data: {
	email: string
	password: string
	phoneNumber: string
}) => apiRequest('auth/signup', { method: 'POST', data, withCredentials: true })

export const updateUser = (id: string, data: Partial<TUser>) =>
	apiRequest(`user/${id}`, { method: 'PATCH', data, withCredentials: true })

export const getUser = (id: string) =>
	apiRequest(`user/${id}`, { withCredentials: true })

export const verifyAccount = (token: string) =>
	apiRequest(`auth/verify/${token}`)

export const resendVerifyEmail = (email: string) =>
	apiRequest('auth/resend-verify', { method: 'POST', data: { email } })
