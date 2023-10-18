"use client";

import React from "react";
import Image from "next/image";

export type product = {
  productId: number;
  productName: string;
  image: string;
  material: string;
  category: string;
  description: string;
  gender: string;
  pris: number;
  sale: boolean;
  tilbudsprosent: number;
  inStock: number;
};

import RemoveButton from "./RemoveButton";
import { Product } from "@/types/Product";

type props = {
  product: Product;
  index: number;
};

const MiniProductDisplay = ({ product, index }: props) => {
  return (
    <div className="flex flex-row gap-4 border-t-2 border-b-2  w-[100%] items- justify-center">
      <div className="flex items-center justify-center">
        <Image
          src={product.image}
          width={50}
          height={50}
          alt={product.description}
          className="object-contain"
        />
      </div>
      <div>
        <div className="flex flex-col">
          <p>{product.description}</p>
          <h1>{product.productName}</h1>
          <p>
            {product.sale === false
              ? product.pris
              : Math.round(
                  product.pris * ((100 - product.tilbudsprosent) / 100)
                )}
          </p>
        </div>
        <div></div>
      </div>
      <RemoveButton
        index={index}
        price={
          product.sale === false
            ? product.pris
            : Math.round(product.pris * ((100 - product.tilbudsprosent) / 100))
        }
      />
    </div>
  );
};

export default MiniProductDisplay;
