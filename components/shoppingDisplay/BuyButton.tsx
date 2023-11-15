"use client";
import React from "react";

import { useDispatch } from "react-redux";
import { add } from "../../app/globalRedux/Features/cart/cartSlice";
import { Product } from "@/types/Product";

type props = {
  product: Product;
};

const BuyButton = ({ product }: props) => {
  const dispatch = useDispatch();

  return (
    <div
      className="bg-yellow-200 w-[160px] border flex rounded-xl center-items justify-center pb-1 hover:cursor-pointer"
      onClick={() =>
        dispatch(
          add({
            item: product,
            price:
              product.sale === false
                ? product.pris
                : Math.round(
                    product.pris * ((100 - product.tilbudsprosent) / 100)
                  ),
          })
        )
      }
    >
      Legg i Handlekurv
    </div>
  );
};

export default BuyButton;
