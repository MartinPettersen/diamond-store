"use client";

import type { RootState } from "../../globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import BuyButton from "@/components/BuyButton";
// import productImage from "app/images/silverring.jpg";
import Image from "next/image";
import { Product } from "@/types/Product";
import { getProduct } from "@/sanity/sanity-utils";

import { useState, useEffect } from 'react';


type Props = {
  params: { product: string }
}

const ProductInfo = ({ params }: Props ) => {
  const slug = params.product;
  
  const products = useSelector((state: RootState) => state.products.products);
  const catalogue = useSelector(
    (state: RootState) => state.catalogue.catalogue
  );
  const dispatch = useDispatch();

    const [product, setProduct]= useState<Product>();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      getProduct(slug).then(
        (data) => {setProduct(data)
        setLoading(false)}
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side

  //const products2 = getProducts();


  return (
    <div className="flex w-full h-screen items-center justify-center">
      {product == null?  <>LOADING</> :
      
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
                    Tilbuds Pris: {Math.round(
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
        
}
      
      {/* 
      {products.map((product, i) =>
        product.productId == params.productId ? (
          <div key={i} className="flex flex-row">
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
                    Tilbuds Pris: {Math.round(
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

      */}

        
    </div>
  );
};

export default ProductInfo;
