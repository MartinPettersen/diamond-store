"use client";

import type { RootState } from "../../../../../globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import BuyButton from "@/components/BuyButton";
 // import productImage from "app/images/silverring.jpg";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const ProductInfo = ({ params }: { params: { productId: number } }) => {
  // const products = useSelector((state: RootState) => state.products.products);
  const products = useSelector(
    (state: RootState) => state.catalogue.catalogue.bracelet.man.gold
  );

  const product = useSelector(
    (state: RootState) => state.catalogue.catalogue.bracelet.man.gold
  );
  const dispatch = useDispatch();

  const material = "gold";

  return (
    <div>
      <div>{product.map((pro, i) => (
        <div key={i}>{pro.productId}</div> 
        ))}</div>
        {/* nøkkelen ligger her et sted */}
      <ProductCard productId={params.productId} catalogue={"bracelet"} material={material} gender={"man"} products={products}/>
    </div>
    
  );
};

export default ProductInfo;
