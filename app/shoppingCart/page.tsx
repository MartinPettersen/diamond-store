"use client";

import MiniProductDisplay from "@/components/MiniProductDisplay";
import type { RootState } from "../globalRedux/store";
import { useSelector, useDispatch } from "react-redux";



const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);

  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex justify-center p-4 ">
      <div className="flex flex-col gap-4  w-[60%] items-center">
        <div>
          <p>Produkter i handlevågnen: {cart.length} </p>
        </div>

        <div className="flex flex-col gap-2  w-[100%] items-center">
          {cart.map((item, index) => (
              <MiniProductDisplay key={index} index={index} product={item} /> 
 
          ))}
        
        </div>
        <p>Beløp: {total}</p>
        <p>gå til betaling</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
