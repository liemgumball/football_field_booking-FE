import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollWrapper = ({ children }: { children?: React.ReactNode }) => {
	const location = useLocation()

	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0)
	}, [location.pathname])
	return children
}

export default ScrollWrapper
