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
/*
import silverRingWoman from "/app/images/silverRingWoman.png";
import silverRingMan from "/app/images/silverRingMan.png";
import silverBraceletWoman from "/app/images/silverBraceletWoman.png";
import silverBraceletMan from "/app/images/silverBraceletMan.png";
import silverEarringMan from "/app/images/silverEarringMan.png";
import silverEarringWoman from "/app/images/silverEarringWoman.png";
import silverNecklaceWoman from "/app/images/silverNecklaceWoman.png";
import silverNecklaceMan from "/app/images/silverNecklaceMan.png";
import silverWatchWoman from "/app/images/silverWatchWoman.png";
import silverWatchMan from "/app/images/silverWatchMan.png";

import goldRingWoman from "/app/images/goldRingWoman.png";
import goldRingMan from "/app/images/goldRingMan.png";
import goldBraceletWoman from "/app/images/goldBraceletWoman.png";
import goldBraceletMan from "/app/images/goldBraceletMan.png";
import goldEarringMan from "/app/images/goldEarringMan.png";
import goldEarringWoman from "/app/images/goldEarringWoman.png";
import goldNecklaceWoman from "/app/images/goldNecklaceWoman.png";
import goldNecklaceMan from "/app/images/goldNecklaceMan.png";
import goldWatchWoman from "/app/images/goldWatchWoman.png";
import goldWatchMan from "/app/images/goldWatchMan.png";
*/
// fix this--------------------------------------------------------------------------

import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { Product } from "@/types/Product";
/*
const imageTranslator = (expr: string) => {
  switch (expr) {
    case "silverRingWoman.png":
      return silverRingWoman;
      break;
    case "silverRingMan.png":
      return silverRingMan;
      break;
    case "goldRingWoman.png":
      return goldRingWoman;
      break;
    case "goldRingMan.png":
      return goldRingMan;
      break;
    case "silverBraceletWoman.png":
      return silverBraceletWoman;
      break;
    case "silverBraceletMan.png":
      return silverBraceletMan;
      break;
    case "goldBraceletWoman.png":
      return goldBraceletWoman;
      break;
    case "goldBraceletMan.png":
      return goldBraceletMan;
      break;
    case "silverWatchWoman.png":
      return silverWatchWoman;
      break;
    case "silverWatchMan.png":
      return silverWatchMan;
      break;
    case "goldWatchWoman.png":
      return goldWatchWoman;
      break;
    case "goldWatchMan.png":
      return goldWatchMan;
      break;
    case "silverEarringWoman.png":
      return silverEarringWoman;
      break;
    case "silverEarringMan.png":
      return silverEarringMan;
      break;
    case "goldEarringWoman.png":
      return goldEarringWoman;
      break;
    case "goldEarringMan.png":
      return goldEarringMan;
      break;
    case "silverNecklaceWoman.png":
      return silverNecklaceWoman;
      break;
    case "silverNecklaceMan.png":
      return silverNecklaceMan;
      break;
    case "goldNecklaceWoman.png":
      return goldNecklaceWoman;
      break;
    case "goldNecklaceMan.png":
      return goldNecklaceMan;
      break;
    default:
      return "error";
  }
};
*/
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
        <RemoveButton index={index} price={product.sale === false
              ? product.pris
              : Math.round(
                  product.pris * ((100 - product.tilbudsprosent) / 100)
                )} />
    </div>
  );
};

export default MiniProductDisplay;
