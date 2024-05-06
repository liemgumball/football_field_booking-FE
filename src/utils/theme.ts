import { TTheme } from '@/stores/theme'

// for tailwind css, need the change the root
export const applyThemePreference = (theme: TTheme) => {
	const root = window.document.documentElement

	root.classList.remove('light', 'dark')

	root.classList.add(theme)
}
