import { useEffect, useState } from 'react'

const useDebounce = (value: string) => {
	const [debounce, setDebounce] = useState(value)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebounce(value)
		}, 3000)

		return () => {
			clearTimeout(timeoutId)
		}
	})

	return debounce
}

export default useDebounce
