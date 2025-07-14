import { createSlice } from "@reduxjs/toolkit";

export const category = createSlice ({
    name: 'category',
    initialState: {
        value : false,
    },
    reducers: {
        category: (state, action) => {            
            state.value=action.payload

        }
    }
})

export const {activeButton} = breadcumb.actions
export default breadcumb.reducer