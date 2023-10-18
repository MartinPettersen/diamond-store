'use client';
// redux fungerer ikke på serverside

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './Features/counter/counterSlice';
import cartReducer from './Features/cart/cartSlice';
import filterReducer from './Features/filters/filterSlice';
import productsReducer from './Features/products/productsSlice';
import catalogueReducer from './Features/catalog/catalogSlice';



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        filter: filterReducer,
        products: productsReducer,
        catalogue: catalogueReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
