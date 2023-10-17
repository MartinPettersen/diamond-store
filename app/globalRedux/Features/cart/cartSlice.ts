'use client';

import { Product } from '@/types/Product';
import { createSlice } from '@reduxjs/toolkit';

export type item ={
    productId: number,
}

export type product = {
    productId: number,
    productName: string,
    image: string,
    material: string,
    category: string,
    description: string,
    gender: string,
    pris: number,
    sale: boolean,
    tilbudsprosent: number,
    inStock: number,
}

export interface CartState {
    items: Product[],
    total: number,
}

const initialState: CartState = {
    items: [],
    total: 0,
}

export const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => { 
            state.items.push(action.payload.item);
            state.total += Number(action.payload.price);
        },
        remove: (state, action) => { 
            state.total -= Number(action.payload.price);
            if (action.payload.item > -1){
                state.items.splice(action.payload.item, 1)
            }
        },

    }
})

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;