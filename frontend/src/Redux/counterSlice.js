import Plant from "../Assets/Images/Plant-Card0.png";
import Plant1 from "../Assets/Images/Plant-Card1.png";

import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
	profile: [],
  riwayatBeli: [],
	cardData: [],
	index: 0
}

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
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

export const { setProfile, setRiwayatBeli } = counterSlice.actions

export default counterSlice.reducer