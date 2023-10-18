"use client";

import MiniProductDisplay from "@/components/MiniProductDisplay";
import type { RootState } from "../globalRedux/store";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);

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
        <div className="flex justify-center items-center bg-yellow-400 rounded-full p-2 pl-4 pr-4 hover:cursor-pointer text-yellow-100 hover:text-white">
          <p className="font-extrabold">Gå til betaling</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
