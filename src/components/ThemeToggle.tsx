import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

import useThemeStore from '@/stores/theme'
import { useEffect } from 'react'
import { applyThemePreference } from '@/utils/theme'

const ModeToggle = () => {
	const { theme, toggle } = useThemeStore((state) => state)

	useEffect(() => {
		applyThemePreference(theme)
	}, [theme])

	return (
		<Button
			className="rounded-full"
			variant="outline"
			size="icon"
			onClick={toggle}
		>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}

export default ModeToggle
