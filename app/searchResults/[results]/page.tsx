"use client";
import React from "react";
import { useState, useEffect } from 'react';

import type { RootState } from "../../globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import ProductDisplay from "@/components/ProductDisplay";
import CategoriDisplay from "@/components/CategoriDisplay";
import SearchFilters from "@/components/SearchFilters";
import FilterDisplay from "@/components/FilterDisplay";
import { getCategori, getFilteredProducts, getSearchedProducts } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";



type Props = {
  params: { results: string }
}


const SearchResults = ({ params }: Props) => {
  const searchTerms: string[] = [];
  const searchTerm: string = params.results;

  searchTerms.push(searchTerm);

  const filters = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const valgtKategori = "Silver";

  const [utvalgteProdukter, setUtvalgteProdukter]= useState<Product[]>();
    const [isLoading, setLoading] = useState(true);

    
    useEffect(() => {
      getSearchedProducts(searchTerm).then(
        (data) => {setUtvalgteProdukter(data)
        setLoading(false)}
      )
    }, [])

    


  const catalogue = useSelector(
    (state: RootState) => state.catalogue.catalogue
  );

  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center justify-center w-[80%] p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {utvalgteProdukter == null? <>Loading</> :
          
          utvalgteProdukter.map((product, index) => (

            <ProductDisplay key={index} path={`${Object.keys(valgtKategori)[index]}/${Object.keys(valgtKategori)[index]}/silver`} product={product} />                

        ))
          }
        
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
