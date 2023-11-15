'use client'
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/globalRedux/store";
import Link from "next/link";

const ShoppingCartButton = () => {
  const cart = useSelector((state: RootState) => state.cart.items);

  return (
    <Link href="/shoppingCart" className="flex items-center">
      <ShoppingCartIcon className="h-8 w-8" />
      <div className="bg-orange-400 text-white flex items-center justify-center ml-[-14px] w-5 h-5 rounded-full mt-[-18px]">
        {cart.length}
      </div>
      </Link>
  );
};

export default ShoppingCartButton;
