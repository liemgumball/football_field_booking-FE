import { useEffect, useState } from 'react'

const useDebounce = <T,>(value: T, delay?: number) => {
	const [debounce, setDebounce] = useState(value)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebounce(value)
		}, delay || 1000)

		return () => {
			clearTimeout(timeoutId)
		}
	})

	return debounce
}

export default useDebounce
