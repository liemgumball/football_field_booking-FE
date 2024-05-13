export type TTimeStep = string

export type TUser = {
	_id: string
	email: string
	name?: string
	phoneNumber: string
	role: string
	avatar?: string
	avatarFallback?: string
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
	location: TLocation
}

export type TSubField = {
	_id: string
	name: string
	size: number
	defaultPrice?: number
}

export type TBookingStatus = 'confirmed' | 'canceled' | 'pending'

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
	date: string
	turnOfServices: TTurnOfService[]
	availability?: boolean
}

export type TBooking = {
	_id: string
	userId: string
	name: string | null
	subfieldId: string
	subfield: TSubField
	fieldId: string
	field: TFootballField
	date: Date | string
	from: TTimeStep
	to: TTimeStep
	price: number
	status: TBookingStatus
	confirmed?: boolean
	cancel?: boolean
	paid?: boolean
	createdAt?: Date | string
	updatedAt?: Date | string
	description?: string
	additionalServices?: unknown
}

export type TMarker = {
	_id: string
	geo: {
		type: 'Point'
		coordinates: [number, number]
	}
	distance: number
	field: {
		name: string
		rating: number | null
	}
}

export type TRating = 1 | 2 | 3 | 4 | 5
