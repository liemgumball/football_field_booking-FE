export type TUser = {
	_id: string
	email: string
	name: string
	phoneNumber: string
	role: string
}

// The access token to backend APIs exists in the cookies
export type TAuth = {
	user?: TUser
	googleAccessToken?: string
}

export type TFootballField = {
	_id: string
	name: string
	rating: number
}

export type TFootballFieldSize = '5' | '6' | '7' | '11'
