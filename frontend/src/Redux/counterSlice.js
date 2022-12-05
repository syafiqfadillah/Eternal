import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	byId: [],
	profile: [],
    riwayatBeli: [],
	cardData: [],
	index: 0
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
		setIndex: (state, action) => {
			state.index = action.payload
		},
		setProfile: (state, action) => {
            state.profile = action.payload
        },
        setRiwayatBeli: (state, action) => {
            state.riwayatBeli = action.payload
		} 
	}
})

export const { setCardData, setIndex, setById } = counterSlice.actions

export default counterSlice.reducer