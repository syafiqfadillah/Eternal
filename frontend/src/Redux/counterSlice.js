import { createSlice } from "@reduxjs/toolkit"
// import { useEffect } from "react"

const initialState = {
  profile: [],
  riwayatBeli: [],
}

export const counterSlice = createSlice({
  name: "x",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    setRiwayatBeli: (state, action) => {
      state.riwayatBeli = action.payload
    },
  },
})

export const { setProfile, setRiwayatBeli } = counterSlice.actions

export default counterSlice.reducer
