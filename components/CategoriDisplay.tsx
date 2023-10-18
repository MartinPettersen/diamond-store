import React from "react";
import ProductDisplay from "./ProductDisplay";

import { getProducts } from "@/sanity/sanity-utils";

type props = {
  kategori: string;
  index: number;
};

const CategoriDisplay = async ({ kategori, index }: props) => {
  const translator = (expr: string) => {
    switch (expr) {
      case "Ring":
        return "Ringer";
        break;
      case "Necklace":
        return "Smykker";
        break;
      case "Bracelet":
        return "Armbånd";
        break;
      case "Watch":
        return "Armbåndsur";
        break;
      case "Earring":
        return "Øredobber";
        break;
      default:
        return "we encountered a problem";
    }
  };

  const products = await getProducts();

  return (
    <div>
      <div key={index} className="p-6">
        <div className="flex text-4xl items-center justify-center p-6">
          Vårt utvalg av {translator(kategori)}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <>
              {product.categori == kategori ? (
                <div key={product._id}>
                  <ProductDisplay key={index} product={product} />
                </div>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriDisplay;
