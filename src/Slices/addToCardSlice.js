import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardObj: localStorage.getItem("cardData") ? JSON.parse(localStorage.getItem("cardData")) : []
}

export const addToCardSlice = createSlice({
  name: 'addCard',
  initialState,
  reducers: {
    addToCard: (state, action) => {

      let alldata = state.cardObj.find(item => item.title === action.payload.title)

      if (alldata) {
        alldata.quantity += 1
      } else {
        state.cardObj.push({ ...action.payload, price: (action.payload.price), quantity: 1 })
      }
      localStorage.setItem("cardData", JSON.stringify(state.cardObj))
    },
    increment: (state, action) => {
      let incrementDate = state.cardObj.find(item => item.title === action.payload.title)
      if (incrementDate) {
        incrementDate.quantity += 1
      }
      localStorage.setItem("cardData", JSON.stringify(state.cardObj))
    },
    decrement: (state, action) => {
      let incrementDate = state.cardObj.find(item => item.title === action.payload.title)
      if (incrementDate) {
        incrementDate.quantity -= 1
      }
      localStorage.setItem("cardData", JSON.stringify(state.cardObj))
    },
    removeItem: (state, action) => {
      state.cardObj.map((item, index) => {
        if (item.title === action.payload.title) {
          state.cardObj.splice(0, 1)
        }
      })
      localStorage.setItem("cardData", JSON.stringify(state.cardObj))
    }


  },
})

export const { addToCard, increment, decrement, removeItem } = addToCardSlice.actions

export default addToCardSlice.reducer