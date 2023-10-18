"use client";
import React from "react";
import { useState, useEffect } from "react";

import type { RootState } from "../../globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import ProductDisplay from "@/components/ProductDisplay";
import SearchFilters from "@/components/SearchFilters";
import { getCategori, getFilteredProducts } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";

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

type Props = {
  params: { category: string };
};

const Showcase = ({ params }: Props) => {
  const valgtKategori = params.category;

  const filters = useSelector((state: RootState) => state.filter);

  const [utvalgteProdukter, setUtvalgteProdukter] = useState<Product[]>();

  useEffect(() => {
    getCategori(valgtKategori).then((data) => setUtvalgteProdukter(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const gender: string[] = [];
    const material: string[] = [];
    if (filters.woman) {
      gender.push("female");
    }
    if (filters.man) {
      gender.push("male");
    }
    if (filters.silver) {
      material.push("silver");
    }
    if (filters.gold) {
      material.push("gold");
    }
    getFilteredProducts(valgtKategori, gender, material).then((data) =>
      setUtvalgteProdukter(data)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div className="flex items-center flex-col">
      <SearchFilters />
      {valgtKategori}
      <div className="flex items-center justify-center w-[80%] p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {utvalgteProdukter == null ? (
            <>Loading</>
          ) : (
            utvalgteProdukter.map((product, index) => (
              <ProductDisplay key={index} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
