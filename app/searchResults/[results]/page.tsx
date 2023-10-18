"use client";
import React from "react";
import { useState, useEffect } from 'react';

import type { RootState } from "../../globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import ProductDisplay from "@/components/ProductDisplay";
import { getCategori, getFilteredProducts, getSearchedProducts } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";

type Props = {
  params: { results: string }
}

const SearchResults = ({ params }: Props) => {
  const searchTerms: string[] = [];
  const searchTerm: string = params.results;

  searchTerms.push(searchTerm);

  const [utvalgteProdukter, setUtvalgteProdukter]= useState<Product[]>();

    
    useEffect(() => {
      getSearchedProducts(searchTerm).then(
        (data) => setUtvalgteProdukter(data)
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center justify-center w-[80%] p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {utvalgteProdukter == null? <>Loading</> :
          
          utvalgteProdukter.map((product, index) => (

            <ProductDisplay key={index} product={product} />                

        ))
          }
        
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
