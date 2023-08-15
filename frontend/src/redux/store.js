import { configureStore } from "@reduxjs/toolkit";

import resultSlice from "./resultSlice";


const store = configureStore({
    reducer: {
        resultData: resultSlice
    }
});


export default store;