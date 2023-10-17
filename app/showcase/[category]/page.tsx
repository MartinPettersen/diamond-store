"use client";
import React from "react";
import { useState, useEffect } from 'react';

import type { RootState } from "../../globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import ProductDisplay from "@/components/ProductDisplay";
import CategoriDisplay from "@/components/CategoriDisplay";
import SearchFilters from "@/components/SearchFilters";
import FilterDisplay from "@/components/FilterDisplay";
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
  params: { category: string }
}


const Showcase = ({ params }: Props) => {
  const valgtKategori = params.category;

  const filters = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const [utvalgteProdukter, setUtvalgteProdukter]= useState<Product[]>();
    const [isLoading, setLoading] = useState(true);

    
    useEffect(() => {
      getCategori(valgtKategori).then(
        (data) => {setUtvalgteProdukter(data)
        setLoading(false)}
      )
    }, [])

    
    useEffect(() => {

      const gender: string[] = [];
      const material: string[] = [];
      if (filters.woman) {
        gender.push("Female");
      };
      if (filters.man) {
        gender.push("Male");
      };
      if (filters.silver) {
        material.push("Silver");
      };
      if (filters.gold) {
        material.push("Gold");
      };
      getFilteredProducts(valgtKategori, gender, material).then(
        (data) => {setUtvalgteProdukter(data)
        setLoading(false)}
      )
    }, [filters])

  const catalogue = useSelector(
    (state: RootState) => state.catalogue.catalogue
  );

  return (
    <div className="flex items-center flex-col">
      <SearchFilters />
      {valgtKategori}
      <div className="flex items-center justify-center w-[80%] p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {utvalgteProdukter == null? <>Loading</> :
          
          utvalgteProdukter.map((product, index) => (

              <ProductDisplay key={index} path={`${Object.keys(valgtKategori)[index]}/${Object.keys(valgtKategori)[index]}/silver`} product={product} />                

          ))
          
          }
        {/* 
          {Object.values(catalogue).map((kategori, index) => (
            <>
              {Object.keys(catalogue)[index] === filters.kategori ? 
              <FilterDisplay key={index} kategori={kategori} index={index} />
              :
              <></>
            }
            </>
          ))}

            */}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
