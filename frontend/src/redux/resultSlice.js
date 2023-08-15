import { createSlice } from "@reduxjs/toolkit";


export const resultSlice = createSlice({
    name: 'result',
    initialState: {
        resultData: null
    },
    reducers: {
        setResult: (state, action) => {
            state.resultData = action.payload
        }
    }
});


export const { setResult } = resultSlice.actions;

export default resultSlice.reducer;