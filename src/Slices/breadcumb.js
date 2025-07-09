import { createSlice } from "@reduxjs/toolkit";

export const breadcumb = createSlice ({
    name: 'breadcumb',
    initialState: {
        previousValue: null,
        currentValue: null
    },
    reducers: {
        activeButton: (state, action) => {            
            state.previousValue=state.currentValue;
            state.currentValue=action.payload;

        }
    }
})

export const {activeButton} = breadcumb.actions
export default breadcumb.reducer