import { useMediaQuery } from 'usehooks-ts'

const IsSm = () => useMediaQuery('(min-width: 640px)')
const IsMd = () => useMediaQuery('(min-width: 768px)')
const IsLg = () => useMediaQuery('(min-width: 1024px)')
const IsXl = () => useMediaQuery('(min-width: 1280px)')
const Is2Xl = () => useMediaQuery('(min-width: 1280px)')

export default () => ({
	IsSm,
	IsMd,
	IsLg,
	IsXl,
	Is2Xl,
})
