import { TTheme } from '@/stores/theme'

// for tailwind css, need the change the root
export const applyThemePreference = (theme: TTheme) => {
	const transitions = transitionManager()
	transitions.disable()

	// Change theme
	const root = window.document.documentElement

	root.classList.remove('light', 'dark')

	root.classList.add(theme)

	root.style.colorScheme = theme

	window.getComputedStyle(transitions.style).opacity
	transitions.enable()
}

const transitionManager = () => {
	// Create HTML style element with CSS selector that targets all
	// elements and applies CSS to disable transitions
	const style = document.createElement('style')
	const css = document.createTextNode(`* {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    -ms-transition: none !important;
    transition: none !important;
  }`)
	style.appendChild(css)

	// Create functions for adding and remove the style element from
	// the page <head> tag
	const enable = () => document.head.removeChild(style)
	const disable = () => document.head.appendChild(style)
	return { enable, disable, style }
}
