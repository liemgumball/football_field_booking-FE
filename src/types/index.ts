export type TTimeStep = string

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

export type TLocation = {
	name: string
	geo: {
		type: 'Point'
		coordinates: [number, number]
	}
}

export type TFootballField = {
	_id: string
	name: string
	rating: number | null
	openedAt: string
	closedAt: string
	images?: [string]
	location?: TLocation
}

export type TSubField = {
	_id: string
	name: string
	size: number
	defaultPrice?: number
}

export type TTurnOfServiceStatus = 'available' | 'progressing' | 'used'

export type TTurnOfService = {
	at: string
	price: number
	status: TTurnOfServiceStatus
}

export type TFootballFieldSize = '5' | '6' | '7' | '11'

export type TDayOfService = {
	_id: string
	field: TFootballField
	subfield: TSubField
	date: Date | string
	turnOfServices: TTurnOfService[]
	availability?: boolean
}

export type TBooking = {
	_id: string
	userId: string
	subfieldId: string
	subfield?: TSubField
	fieldId?: string
	field?: TFootballField
	date: Date | string
	from: TTimeStep
	to: TTimeStep
	price: number
	confirmed?: boolean
	cancel?: boolean
	createdAt?: Date | string
	updatedAt?: Date | string
}
