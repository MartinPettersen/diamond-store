"use client";

import type { RootState } from "../../../../../globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import BuyButton from "@/components/BuyButton";
//import productImage from "app/images/silverring.jpg";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const ProductInfo = ({ params }: { params: { productId: number } }) => {
  // const products = useSelector((state: RootState) => state.products.products);
  const products = useSelector(
    (state: RootState) => state.catalogue.catalogue.jewelery.woman.silver
  );
  const dispatch = useDispatch();

  
  const gender = "woman";
    const material = "silver";
  return (
        <ProductCard productId={params.productId} products={products} catalogue={"jewelery"} gender={gender} material={material} />
  );
};

export default ProductInfo;
