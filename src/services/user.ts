import { TUser } from '@/types'
import apiRequest from './common'

export const login = async (data: { email: string; password: string }) =>
	apiRequest('/auth/login', {
		method: 'POST',
		data,
		withCredentials: true,
	})

export const signup = async (data: {
	email: string
	password: string
	phoneNumber: string
}) =>
	apiRequest('/auth/signup', { method: 'POST', data, withCredentials: true })

export const updateUser = (id: string, data: Partial<TUser>) =>
	apiRequest(`/user/${id}`, { method: 'PATCH', data, withCredentials: true })

export const getUser = (id: string) =>
	apiRequest(`/user/${id}`, { withCredentials: true })

export const verifyAccount = async (token: string) =>
	apiRequest(`/auth/verify/${token}`)

export const resendVerifyEmail = async (email: string) =>
	apiRequest('/auth/resend-verify', { method: 'POST', data: { email } })
