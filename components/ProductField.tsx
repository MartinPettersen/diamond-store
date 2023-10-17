import React from "react";
import ProductDisplay from "./ProductDisplay";

import type { RootState } from "../app/globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import CategoriDisplay from "./CategoriDisplay";

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

const ProductField = () => {
  // const products = useSelector((state: RootState) => state.products.products);

  /*
  const catalogue = useSelector(
    (state: RootState) => state.catalogue.catalogue
  );
  */

  // const dispatch = useDispatch();
  // const catalogueKeys = Object.keys(catalogue);
  // const catalogueValues = Object.values(catalogue);

  const translator = (expr: string) => {
    switch (expr) {
      case "ring":
        return "Ringer";
        break;
      case "jewelery":
        return "Smykker";
        break;
      case "bracelet":
        return "Armbånd";
        break;
      case "watch":
        return "Armbåndsur";
        break;
      case "earrings":
        return "Øredobber";
        break;
      default:
        return "we encountered a problem";
    }
  };

  const kategorier = ["Ring", "Necklace", "Watch", "Bracelet", "Earring"];

  return (
    <div className="flex items-center justify-center w-[80%] p-8">
      <div>
        {kategorier.map((kategori, index) => (
          <CategoriDisplay key={index} kategori={kategori} index={index} />
        ))}
        {/* Object.values(catalogue).map((kategori, index) => (
          
          
            <CategoriDisplay key={index} kategori={kategori} index={index} />
         
        )) */}
      </div>
    </div>
  );
};

export default ProductField;
