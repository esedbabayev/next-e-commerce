"use client"

import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '@/slices/categories.slice.js';  // Import reducer

// import colorSlice from "./slices/colors.slice";
// import sizeSlice from "./slices/sizes.slice";
// import cartSlice from "./slices/cart.slice";

const store = configureStore({
    reducer: {
        categories: categoryReducer,
        // colors: colorSlice.reducer,
        // size: sizeSlice.reducer,
        // cart: cartSlice.reducer,
    }
})



export default store 