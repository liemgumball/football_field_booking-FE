import { TUser } from '@/types'
import apiRequest from './common'

export const login = (data: {
	email: string
	password: string
}): Promise<TUser> =>
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

export const googleLogin = (data: { credential: string }) =>
	apiRequest('auth/google/login', {
		method: 'POST',
		data,
		withCredentials: true,
	})

export const updateUser = (id: string, data: Partial<TUser>) =>
	apiRequest(`users/${id}`, { method: 'PATCH', data, withCredentials: true })

export const getUser = (id: string) =>
	apiRequest(`users/${id}`, { withCredentials: true })

export const verifyAccount = (token: string) =>
	apiRequest(`auth/verify/${token}`)

export const resendVerifyEmail = (email: string) =>
	apiRequest('auth/resend-verify', { method: 'POST', data: { email } })

export const resetPassword = (email: string) =>
	apiRequest('auth/reset-password', { method: 'POST', data: { email } })

export const changePassword = (
	email: string,
	oldPassword: string,
	newPassword: string,
) =>
	apiRequest('auth/change-password', {
		method: 'POST',
		data: { email, oldPassword, newPassword },
	})
