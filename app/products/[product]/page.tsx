"use client";

import BuyButton from "@/components/shoppingDisplay/BuyButton";
import Image from "next/image";
import { Product } from "@/types/Product";
import { getProduct } from "@/sanity/sanity-utils";

import { useState, useEffect } from "react";

type Props = {
  params: { product: string };
};

const ProductInfo = ({ params }: Props) => {
  const slug = params.product;

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getProduct(slug).then((data) => {
      setProduct(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full h-screen items-center justify-center">
      {product == null ? (
        <div className="flex items-center justify-center h-screen w-[100%] ">LOADING</div>
      ) : (
        <div key={product._id} className="flex flex-row gap-2">
          <Image
            src={product.image}
            width={350}
            height={350}
            alt={product.description}
            className="object-contain "
          />
          <div className="flex items-left flex-col gap-4 justify-center">
            <h1 className="text-4xl">{product.productName}</h1>
            <p>{product.description}</p>
            <p>Materiale: {product.material}</p>
            <p>For: {product.gender}</p>
            <div className="h-[60px]">
              {product.sale === true ? (
                <div
                  className="
          "
                >
                  <p className="text-gray-200">Orginal Pris: {product.pris}</p>
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
      )}
    </div>
  );
};

export default ProductInfo;
