import { TAuth, TUser } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthState = TAuth & {
	set: (user: TUser, googleAccessToken?: string) => void

	remove: () => void
}

const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: undefined,
			googleAccessToken: undefined,
			set: (user, googleAccessToken) =>
				set({ user: user, googleAccessToken: googleAccessToken }),
			remove: () => set({ user: undefined, googleAccessToken: undefined }),
		}),
		{
			name: 'auth',
		},
	),
)

export default useAuthStore
