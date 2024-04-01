import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type TTheme = 'dark' | 'light' | 'system'

type ThemeState = {
	theme: TTheme
	setTheme: (theme: TTheme) => void
}

const useThemeStore = create<ThemeState>()(
	persist(
		(set) => ({
			theme: 'system' as TTheme,
			setTheme: (theme) => set({ theme: theme }),
		}),
		{ name: 'theme-preference' },
	),
)

export default useThemeStore
