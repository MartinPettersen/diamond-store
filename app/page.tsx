import Image from "next/image";


import type { RootState } from "./globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./globalRedux/Features/counter/counterSlice";
import ProductField from "@/components/ProductField";

import { getProducts } from "@/sanity/sanity-utils";

export default async function Home() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  const products = await getProducts();
  // sjekke om jeg kan bruke en versjon av useEffect og useState til å
  // erstate async await
  // https://stackoverflow.com/questions/76369521/how-does-the-use-client-directive-work-in-next-js-13


  return (
    <div className="flex justify-center ">
      {/* 
      <p>|{products[0].name}</p>
      <Image
        src={products[0].image}
        width={400}
        height={200}
        alt={products[0].description}
        className="object-contain"
      />
      */}
      {/* 
      
      <div className="flex flex-col">
      {products.map((product) => (
        <div key={product._id}> {product.name}</div>
        ))}
        </div>
        */}
      <ProductField />
    </div>
  );
}
