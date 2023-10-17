'use client'
import React from 'react'

import type { RootState } from '../app/globalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../app/globalRedux/Features/cart/cartSlice';

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

export type item ={
    productId: number,
    amount: number,
}

const BuyButton = ({product}:any) => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    return (
    <div className='bg-yellow-200 w-[160px] border flex rounded-xl center-items justify-center pb-1 hover:cursor-pointer' onClick={() => dispatch(add({item: product, price: product.sale === false ? product.pris : Math.round(product.pris * ((100 - product.tilbudsprosent) / 100)) }))}>Legg i Handlekurv</div>
  )
}

export default BuyButton