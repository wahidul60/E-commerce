import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../src/Slices/counterSlice'
import breadcumb from '../src/Slices/breadcumb'
import categoryReducer from './Slices/categorySlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    active: breadcumb,
    category : categoryReducer,

    },
  
})