import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	byId: [],
	profile: [],
	riwayatBeli: [],
	cardData: [],
	currentPath: "",
	user: [],
	product: [],
	riwayatJual: [],
	wishlist: [],
	page: 1,
}

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		setById: (state, action) => {
			state.byId = action.payload
		},
		setCardData: (state, action) => {
			state.cardData = action.payload
		},
		setProfile: (state, action) => {
            state.profile = action.payload
        },
        setRiwayatBeli: (state, action) => {
            state.riwayatBeli = action.payload
		},
		setCurrentPath: (state, action) => {
			state.currentPath = action.payload
		},
		setUser: (state, action) => {
			state.user = action.payload
		},
		setSaldo: (state, action) => {
			state.saldo = action.payload
		},
		setWishlist: (state, action) => {
			state.wishlist = action.payload
		},
		setProduct: (state, action) => {
			state.product = action.payload
		},
		increment: (state, action) => {
			state.page += 1
		},
		decrement: (state, action) => {
			state.page -= 1
		},
		reset: (state, action) => {
			state.page = 1
		},
	}
})

export const { 
	setCardData, 
	setById, 
	setCurrentPath, 
	setCart,
	setUser,
	setRiwayatBeli,
	setSaldo,
	setProduct,
	increment,
	decrement,
	setWishlist,
	setReset, 
} = counterSlice.actions

export default counterSlice.reducer