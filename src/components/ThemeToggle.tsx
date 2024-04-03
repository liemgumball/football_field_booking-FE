import { Moon, Sun } from 'lucide-react'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

import useThemeStore, { TTheme } from '@/stores/theme'
import { useEffect } from 'react'
import { applyThemePreference } from '@/utils/theme'

const ModeToggle = () => {
	const { theme, setTheme } = useThemeStore((state) => state)

	useEffect(() => {
		applyThemePreference(theme)
	}, [theme])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="rounded-full" variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Toggle Theme</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={theme}
					onValueChange={(theme) => setTheme(theme as TTheme)}
				>
					<DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ModeToggle
