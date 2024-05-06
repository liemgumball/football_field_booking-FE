import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type TTheme = 'dark' | 'light'

type ThemeState = {
	theme: TTheme
	toggle: () => void
}

const useThemeStore = create<ThemeState>()(
	persist(
		(set) => ({
			theme: window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light',
			toggle: () =>
				set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
		}),
		{ name: 'theme-preference' },
	),
)

export default useThemeStore
