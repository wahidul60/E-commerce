import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        openCategories: {}
    },
    reducers: {
        toggleCategory: (state, action) => {
            const name = action.payload
            state.openCategories[name] = !state.openCategories[name]

            {/*Spread Toggle
            const name = action.payload
            const prevState = state.openCategories
            state.openCategories = {
                ...prevState,
                [name]: !prevState[name]*/}

        }
    }
})

export const { toggleCategory } = categorySlice.actions
export default categorySlice.reducer

