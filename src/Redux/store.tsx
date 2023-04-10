import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducers/Product.reducer";

export const store = configureStore({
    reducer: {
        productsStore: ProductReducer,
    },
    
})