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
    (state: RootState) => state.catalogue.catalogue.earrings.man.gold
  );
  const dispatch = useDispatch();

  
  const gender = "man";
    const material = "gold";
  return (
        <ProductCard productId={params.productId} products={products} catalogue={"earrings"} gender={gender} material={material} />
  );
};

export default ProductInfo;
