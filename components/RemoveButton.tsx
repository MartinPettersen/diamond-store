"use client"
// client component


import type { RootState } from '../app/globalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../app/globalRedux/Features/cart/cartSlice';

import { TrashIcon } from "@heroicons/react/20/solid";

type props = {
    index: number,
    price: number
}

const RemoveButton = ({index, price}: props) => {

    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <button className=" disabled:opacity-50 disabled:cursor-not-allowed">
            
            <TrashIcon className="h-10 w-10 text-red-500" onClick={() => dispatch(remove({item: index, price: price }))} />
            </button>
      )
    }
    
export default RemoveButton


