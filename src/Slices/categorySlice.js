import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice ({
    name: 'category',
    initialState: {
        value : false,
    },
    reducers: {
        toggleCategory: (state, action) => {            
            state.value=!state.value

        }
    }
})

export const {toggleCategory} = categorySlice.actions
export default categorySlice.reducer