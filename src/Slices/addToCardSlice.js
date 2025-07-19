import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardObj : []
}

export const addToCardSlice = createSlice({
  name: 'addCard',
  initialState,
  reducers: {
    addToCard: (state,action) => {     
        
        let alldata = state.cardObj.find(item=>item.title===action.payload.title)
        
        if(alldata)
        {
            alldata.quantity+=1
        }else{
            state.cardObj.push({...action.payload,quantity:1})
        }
    },
    increment: (state,action)=> {
      let incrementDate = state.cardObj.find(item=>item.title === action.payload.title)
      if(incrementDate) 
      {
        incrementDate.quantity+=1
      }
    },
    decrement: (state,action)=> {
      let incrementDate = state.cardObj.find(item=>item.title === action.payload.title)
      if(incrementDate) 
      {
        incrementDate.quantity-=1
      }
    }
  },
})

export const { addToCard, increment, decrement } = addToCardSlice.actions

export default addToCardSlice.reducer