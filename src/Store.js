import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../src/Slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    },
  
})