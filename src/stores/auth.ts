import { TAuth, TUser } from '@/types'
import { getAvatarFallback } from '@/utils/user'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthState = TAuth & {
	set: (user: TUser, googleAccessToken?: string) => void

	remove: () => void

	setResetPassword: (is: boolean) => void
}

const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: undefined,
			googleAccessToken: undefined,
			isResetPassword: false,

			set: (user, googleAccessToken) =>
				set({
					user: {
						...user,
						avatarFallback: getAvatarFallback(user.name || user.email),
					},
					googleAccessToken: googleAccessToken,
				}),
			remove: () => set({ user: undefined, googleAccessToken: undefined }),
			setResetPassword: (is) => set({ isResetPassword: is }),
		}),
		{
			name: 'auth',
		},
	),
)

export default useAuthStore
