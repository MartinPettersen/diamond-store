'use client';

import { createSlice } from '@reduxjs/toolkit';


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

export interface productsState {
    products: product[]
}

const initialState: productsState = {
    products: [
        {
            productId: 1,
            productName: 'Golden Ring',
            image: "/app/images/silverring.jpg",
            material: "gold",
            category: "ring",
            description: " A gold ring",
            gender: "dame",
            pris: 1299,
            sale: true,
            tilbudsprosent: 20,
            inStock: 4,
        },
        {
            productId: 2,
            productName: 'silver Ring',
            image: "/app/images/silverring.jpg",
            material: "silver",
            category: "ring",
            description: " A Silver ring",
            gender: "Herre",
            pris: 1099,
            sale: false,
            tilbudsprosent: 0,
            inStock: 2,
        },
        {
            productId: 3,
            productName: 'Golden Ring',
            image: "/app/images/silverring.jpg",
            material: "gold",
            category: "ring",
            description: " A gold ring",
            gender: "Herre",
            pris: 1199,
            sale: true,
            tilbudsprosent: 10,
            inStock: 14,
        },
        {
            productId: 4,
            productName: 'silver Ring',
            image: "/app/images/silverring.jpg",
            material: "silver",
            category: "ring",
            description: " A Silver ring",
            gender: "dame",
            pris: 1499,
            sale: false,
            tilbudsprosent: 0,
            inStock: 12,
        },
        
        {
            productId: 5,
            productName: 'Golden Ring',
            image: "/app/images/silverring.jpg",
            material: "Gold",
            category: "ring",
            description: " A Silver ring",
            gender: "Herre",
            pris: 1099,
            sale: false,
            tilbudsprosent: 0,
            inStock: 0,
        },
    ]
}

export const productsSlice = createSlice ({
    name: 'products',
    initialState,
    reducers: {

    }
})

export const {  } = productsSlice.actions;

export default productsSlice.reducer;