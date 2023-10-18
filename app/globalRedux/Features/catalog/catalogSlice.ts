'use client';

import { createSlice } from '@reduxjs/toolkit';


export type product = {
    productId: number,
    productName: string,
    image: string,
    description: string,
    pris: number,
    sale: boolean,
    tilbudsprosent: number,
    inStock: number,
}

export type kategori = {

        man: {
            silver: product[],
            gold: product[],
        },
        woman: {
            silver: product[],
            gold: product[],            
        },
}

export type catalogue = {
    ring: kategori,
    necklace: kategori,
    bracelet: kategori,
    watch: kategori,
    earring: kategori,
}


export interface catalogueState {
    catalogue: catalogue
}

const initialState: catalogueState = {

    catalogue: {
        ring: {

            man: {
                silver: [{
                    productId: 1,
                    productName: "Sølv Ring",
                    image: "silverRingMan.png",
                    description: "En vakker sølvring for den elegante herre",
                    pris: 1099,
                    sale: true,
                    tilbudsprosent: 20,
                    inStock: 5,
                },],
                gold: [{
                    productId: 2,
                    productName: "Gull Ring",
                    image: "goldRingMan.png",
                    description: "En elegant gullring for herren",
                    pris: 1299,
                    sale: false,
                    tilbudsprosent: 0,
                    inStock: 3,
                }],
            },
            woman: {
                silver: [{
                    productId: 3,
                    productName: "Sølv ring",
                    image: "silverRingWoman.png",
                    description: "En vakker ring til en vakker dame",
                    pris: 1399,
                    sale: true,
                    tilbudsprosent: 10,
                    inStock: 13,
                },],
                gold: [{
                    productId: 4,
                    productName: "Gull ring",
                    image: "goldRingWoman.png",
                    description: "En pen gullring for en dame som vet hva de vill ha",
                    pris: 1499,
                    sale: false,
                    tilbudsprosent: 0,
                    inStock: 21,
                },],            
            },
        },
        necklace: { // necklace
            man: {
                silver: [{
                    productId: 5,
                    productName: "Sølv Smykke",
                    image: "silverNecklaceMan.png",
                    description: "Et fabellaktig smykke som stråler eleganse",
                    pris: 899,
                    sale: false,
                    tilbudsprosent: 0,
                    inStock: 4,
                },],
                gold: [{
                    productId: 6,
                    productName: "Gull smykke",
                    image: "goldNecklaceMan.png",
                    description: "Et fabelaktig smykke som minner om solen",
                    pris: 1199,
                    sale: true,
                    tilbudsprosent: 5,
                    inStock: 8,
                },],
            },
            woman: {
                silver: [{
                    productId: 7,
                    productName: "Sølv smykke",
                    image: "silverNecklaceWoman.png",
                    description: "Et elegant sølvsmykke som bringer fram det beste i deg",
                    pris: 1299,
                    sale: true,
                    tilbudsprosent: 5,
                    inStock: 11,
                },],
                gold: [{
                    productId: 8,
                    productName: "Gull smykke",
                    image: "goldNecklaceWoman.png",
                    description: "Et vakkert smykke som vill gjøre dine venniner misunnelig",
                    pris: 1399,
                    sale: false,
                    tilbudsprosent: 0,
                    inStock: 13,
                },],            
            },
        },
        bracelet: {
            man: {
                silver: [{
                    productId: 9,
                    productName: "sølv armbånd",
                    image: "silverBraceletMan.png",
                    description: "Et sølv armbånd inspirert av vikingene",
                    pris: 599,
                    sale: false,
                    tilbudsprosent: 0,
                    inStock: 3,
                },],
                gold: [{
                    productId: 10,
                    productName: "gull armbånd",
                    image: "goldBraceletMan.png",
                    description: "Et gull armbånd inspirert av vikingene",
                    pris: 699,
                    sale: true,
                    tilbudsprosent: 50,
                    inStock: 20,
                },],
            },
            woman: {
                silver: [{
                    productId: 11,
                    productName: "sølv armbånd",
                    image: "silverBraceletWoman.png",
                    description: "Et sølv armbånd inspirert av den elegante viking kvinne",
                    pris: 799,
                    sale: true,
                    tilbudsprosent: 10,
                    inStock: 13,
                },],
                gold: [{
                    productId: 12,
                    productName: "Gull armbånd",
                    image: "goldBraceletWoman.png",
                    description: "Et elegant gull armbånd som bringer deg tilbake til vikinge tiden",
                    pris: 1999,
                    sale: true,
                    tilbudsprosent: 1,
                    inStock: 21,
                },],            
            },
        },
        watch: {
    
            man: {
                silver: [{
                    productId: 13,
                    productName: "Sølv klokke",
                    image: "silverWatchMan.png",
                    description: "Elegant klokke for den elegant herre",
                    pris: 3999,
                    sale: false,
                    tilbudsprosent: 0,
                    inStock: 31,
                },],
                gold: [{
                    productId: 14,
                    productName: "Dykker Klokke",
                    image: "goldWatchMan.png",
                    description: "Dykker klokke i gull for den dristige herren",
                    pris: 8999,
                    sale: false,
                    tilbudsprosent: 0,
                    inStock: 42,
                },],
            },
            woman: {
                silver: [{
                    productId: 15,
                    productName: "Sølv klokke",
                    image: "silverWatchWoman.png",
                    description: "En elegant sølvklokke for deg som foretrekker eleganse fremfor å møte opp til riktig tid",
                    pris: 1299,
                    sale: true,
                    tilbudsprosent: 20,
                    inStock: 33,
                },],
                gold: [{
                    productId: 16,
                    productName: "Gull klokke",
                    image: "goldWatchWoman.png",
                    description: "Et smykke som ser ut som en klokke, viseren beveger seg, men tiden er aldri riktig",
                    pris: 1599,
                    sale: true,
                    tilbudsprosent: 25,
                    inStock: 28,
                },],            
            },
        },
        earring: {
    
            man: {
                silver: [{
                    productId: 17,
                    productName: "Pirat øredobb",
                    image: "silverEarringMan.png",
                    description: "Pirat øredob i sølv for den dristige herre",
                    pris: 499,
                    sale: true,
                    tilbudsprosent: 5,
                    inStock: 11,
                },],
                gold: [{
                    productId: 18,
                    productName: "Pirat øredobb",
                    image: "goldEarringMan.png",
                    description: "Pirat øredob for herren som lengter etter pirat livet",
                    pris: 599,
                    sale: true,
                    tilbudsprosent: 22,
                    inStock: 33,
                },],
            },
            woman: {
                silver: [{
                    productId: 19,
                    productName: "Sølv øredob",
                    image: "silverEarringWoman.png",
                    description: "elegant sølv øredob for en elegant aften",
                    pris: 1789,
                    sale: true,
                    tilbudsprosent: 11,
                    inStock: 74,
                },],
                gold: [{
                    productId: 20,
                    productName: "Gull øredob",
                    image: "goldEarringWoman.png",
                    description: "Elegant gull øredob for en elegant aften",
                    pris: 2499,
                    sale: false,
                    tilbudsprosent: 0,
                    inStock: 33,
                },],            
            },
        }
    }
    
     
}

export const catalogueSlice = createSlice ({
    name: 'catalog',
    initialState,
    reducers: {

    }
})

export const {  } = catalogueSlice.actions;

export default catalogueSlice.reducer;