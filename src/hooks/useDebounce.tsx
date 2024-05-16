import { useEffect, useState } from 'react'

const useDebounce = <T,>(value: T | (() => T), delay: number = 1000) => {
	const [debounce, setDebounce] = useState(value)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebounce(value)
		}, delay)

		return () => {
			clearTimeout(timeoutId)
		}
	})

	return debounce
}

export default useDebounce
