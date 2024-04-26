export function getAvatarFallback(name: string): string {
	name = name.trim()
	name = name.replace(/\s+/g, ' ')
	const letters = name.split(' ')

	let avatarFallback = ''

	letters.forEach((letter) => {
		avatarFallback += letter.at(0)
	})

	return avatarFallback
}
