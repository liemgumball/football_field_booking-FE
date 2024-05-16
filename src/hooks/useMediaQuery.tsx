import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query)
		const documentChangeHandler = () => setMatches(mediaQueryList.matches)

		// Add the listener
		mediaQueryList.addEventListener('change', documentChangeHandler)

		// Cleanup function to remove the listener
		return () => {
			mediaQueryList.removeEventListener('change', documentChangeHandler)
		}
	}, [query])

	return matches
}

export default useMediaQuery
