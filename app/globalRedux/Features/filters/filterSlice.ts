'use client';

import { createSlice } from '@reduxjs/toolkit';



export interface filterState {
    kategori: string,
    gold: boolean,
    silver: boolean,
    man: boolean,
    woman: boolean,
}

const initialState: filterState = {
    kategori: "ring",
    gold: true,
    silver: true,
    man: true,
    woman: true,
}

export const filterSlice = createSlice ({
    name: 'filter',
    initialState,
    reducers: {
        goldHandler: (state) => { state.gold = !state.gold },
        silverHandler: (state) => { state.silver = !state.silver },
        manHandler: (state) => { state.man = !state.man },
        womanHandler: (state) => { 
            state.woman = !state.woman;
         },
        categoriHandler: (state, action) => {
            state.kategori = action.payload;
        }
    }
})

export const { goldHandler, silverHandler, manHandler, womanHandler, categoriHandler } = filterSlice.actions;

export default filterSlice.reducer;