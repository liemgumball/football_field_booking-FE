import { timeValues } from '@/constants/time'

export type TTimeStep = (typeof timeValues)[number] | string

export type TTimeRange = {
	from: TTimeStep
	to: TTimeStep
}

export type TViewPort = {
	longitude: number
	latitude: number
	zoom: number
}

export type TUser = {
	_id: string
	email: string
	name?: string
	phoneNumber: string
	role: string
	avatar?: string
	avatarFallback?: string
	googleId?: string
}

// The access token to backend APIs exists in the cookies
export type TAuth = {
	user?: TUser
	googleAccessToken?: string
	isResetPassword: boolean
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
	images?: string[]
	location: TLocation
	subfieldIds: string[]
	subfields?: TSubField[]
}

export type TSubField = {
	_id: string
	name: string
	size: number
	image?: string
	defaultPrice: number
}

export type TBookingStatus = 'confirmed' | 'canceled' | 'pending'

export type TTurnOfServiceStatus = 'available' | 'progressing' | 'used'

export type TTurnOfService = {
	at: TTimeStep
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

export type TAvailableBooking = {
	dayOfService: TDayOfService
	from: TTimeStep
	to: TTimeStep
	status: TTurnOfServiceStatus
	price: number
	duration: number
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
	canceled?: boolean
	paid?: boolean
	createdAt?: Date | string
	updatedAt?: Date | string
	description?: string
	additionalServices?: unknown
	review?: TReview
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

export type TReview = {
	rating: number
	description?: string
}
