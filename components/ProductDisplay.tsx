import React from "react";
import Image from "next/image";

import { Product } from "@/types/Product";

import Link from "next/link";
import SaleBanner from "./SaleBanner";

type props = {
  product: Product;
};

const ProductDisplay = ({ product }: props) => {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="border flex flex-col items-center border-gray-500 w-[200px] h-[360px] m-2 hover:scale-110 shadow-custom hover:border-gray-200 hover:border-4 hover:shadow-2xl"
    >
      <SaleBanner sale={product.sale} />

      <Image
        src={product.image}
        alt={product.alt}
        width={400}
        height={200}
        className="object-contain"
      />
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
