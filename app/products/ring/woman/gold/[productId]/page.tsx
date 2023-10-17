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
    (state: RootState) => state.catalogue.catalogue.ring.woman.gold
  );
  const dispatch = useDispatch();

  
  const gender = "woman";
    const material = "gold";
  return (
        <ProductCard productId={params.productId} products={products} catalogue={"ring"} gender={gender} material={material} />
  );
};

export default ProductInfo;
