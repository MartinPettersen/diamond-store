import React from "react";
import BuyButton from "./BuyButton";
import Image from "next/image";

import { Product } from "@/types/Product";


// fix this-------------------------------------------------------------------------------
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
import SaleBanner from "./SaleBanner";
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
      return "Error";
  }
};
*/
/*
export type product = {
  productId: number;
  productName: string;
  image: string;
  description: string;
  pris: number;
  sale: boolean;
  tilbudsprosent: number;
  inStock: number;
};
*/
type props = {
  product: Product;
  path: any;
};

const ProductDisplay = ({ product, path }: props) => {
  return (
    <Link
      // href={`/products/${path}/${product._id}`}
      href={`/products/${product.slug}`}
      
      className="border flex flex-col items-center border-gray-500 w-[200px] h-[360px] m-2 hover:scale-110 shadow-custom hover:border-gray-200 hover:border-4 hover:shadow-2xl"
    >
      <SaleBanner sale={product.sale} />

      <Image src={product.image} alt={product.alt} width={400} height={200} className='object-contain'/>
      {/*}
      <Image
        src={imageTranslator(product.image)}
        width={400}
        height={200}
        alt={product.description}
        className="object-contain"
      /> */}
      <div className="flex items-center text-center justify-center  h-[4em] ">
        <div className="  overflow-hidden h-[80%]">{product.description}</div>
      </div>
      <div className="h-[2em] justify-center items-center">
        {product.sale === true ? (
          <div className=" flex flex-row items-center justify-center gap-2 ">
            <p className="text-gray-400 line-through decoration-orange-400 decoration-2">
              {product.pris}
            </p>
            {Math.round(product.pris * ((100 - product.tilbudsprosent) / 100))}
          </div>
        ) : (
          <p>{product.pris}</p>
        )}
      </div>
      <div className="mt-auto w-[100%]">
        <SaleBanner sale={product.sale} />
      </div>
    </Link>
  );
};

export default ProductDisplay;
