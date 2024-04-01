import { TTheme } from '@/stores/theme'

// for tailwind css, need the change the root
export const applyThemePreference = (theme: TTheme) => {
	const root = window.document.documentElement

	root.classList.remove('light', 'dark', 'system')

	if (theme === 'system') {
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
			.matches
			? 'dark'
			: 'light'

		root.classList.add(systemTheme)
	}
	root.classList.add(theme)
}
