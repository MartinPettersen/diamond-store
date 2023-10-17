"use client";

import type { RootState } from "../app/globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import BuyButton from './BuyButton'
import Image from "next/image";
// import productImage from "app/images/silverring.jpg";

type product = {
    productId: number,
    productName: string,
    image: string,
    description: string,
    pris: number,
    sale: boolean,
    tilbudsprosent: number,
    inStock: number,
}



type props = {
    productId: number,
    material: string,
    gender: string,
    catalogue: string,
    products: any,
}
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

const imageTranslator = (expr: string) => {
  /*
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
      return productImage;
  } */
  return "removethus"
};

const ProductCard = ({productId, material, gender, catalogue, products} :props) => {

    /*
    const products = useSelector(
        (state: RootState) => state.catalogue.catalogue.bracelet.man.gold
      );
    */
  return (
    <div className="flex w-full h-screen items-center justify-center">
      {products.map((product: product, i: number) =>
        product.productId == productId ? (
          <div key={i} className="flex flex-row gap-8">
            <Image
              src={imageTranslator(product.image)}
              width={350}
              height={350}
              alt={product.description}
              className="object-contain p-4"
            />
            <div className="flex items-left flex-col gap-4 justify-center">
              <h1 className="text-4xl">{product.productName}</h1>
              <p>{product.description}</p>
              <p>Materiale: {material}</p>
              <p>For: {gender}</p>
              <div className="h-[60px]">
                {product.sale === true ? (
                  <div
                    className="
          "
                  >
                    <p className="text-gray-200">
                      Orginal Pris: {product.pris}
                    </p>
                    Tilbuds Pris:{" "}
                    {Math.round(
                      product.pris * ((100 - product.tilbudsprosent) / 100)
                    )}
                  </div>
                ) : (
                  <p>Pris: {product.pris}</p>
                )}
              </div>
              <BuyButton product={product} />
            </div>
          </div>
        ) : (
          <div key={i}></div>
        )
      )}
    </div>  )
}

export default ProductCard