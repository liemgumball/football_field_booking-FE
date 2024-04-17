import { TBooking } from '@/types'
import { create } from 'zustand'

type TCart = Omit<TBooking, '_id' | 'userId'> | null

type CartState = {
	cart: TCart
	set: (data: TCart) => void
}

const useCartStore = create<CartState>((set) => ({
	cart: null,
	set: (data) => set({ cart: data }),
}))

export default useCartStore
