import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cardData: [{
	      head: "This is a Tree",
	      price: "Rp 100.000"
	    },
	    {
	      head: "This is a not a Tree",
	      price: "Rp 50.000"
	    },
	    {
	      head: "This is a Tree",
	      price: "Rp 10.000.000"
	    },
	    {
	      head: "This is a Tree",
	      price: "Rp 10.000.000"
	    },
	      {
	      head: "This is a Tree",
	      price: "Rp 100.000"
	    },
	    {
	      head: "This is a not a Tree",
	      price: "Rp 50.000"
	    },
	    {
	      head: "This is a Tree",
	      price: "Rp 10.000.000"
	    },
	    {
	      head: "This is a Tree",
	      price: "Rp 10.000.000"
	    }
	],
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
		}
	}
})

export const { setCardData, setIndex } = counterSlice.actions

export default counterSlice.reducer