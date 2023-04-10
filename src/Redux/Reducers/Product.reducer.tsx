import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../Constants/product.interface";
import { fetchData } from "../../Services/API/products.service";
import { useDispatch } from "react-redux";

export const fetchProducts = createAsyncThunk("products/fetchProducts",
    async () => {
        try {
            let products: IProduct = await fetchData() as IProduct
            console.log(products);
            return products
        } catch (error) {
            console.log(error);
            Promise.reject(error)
            return []
        }
    })

const initialState = {
    products: [] as IProduct[],
    loading: true
}

const productReducer = createSlice({
    name:  "products",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = []
            state.products = action.payload
            state.loading = false
        }),
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state = state
        })
    },
})

export default productReducer.reducer