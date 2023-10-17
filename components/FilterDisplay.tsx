"use client";
import React from "react";
import ProductDisplay from "./ProductDisplay";

import type { RootState } from "../app/globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { kategori } from "@/app/globalRedux/Features/catalog/catalogSlice";

type props = {
  kategori: kategori;
  index: number;
};

const CategoriDisplay = ({ kategori, index }: props) => {
  const catalogue = useSelector(
    (state: RootState) => state.catalogue.catalogue
  );

  const translator = (expr: string) => {
    switch (expr) {
      case "ring":
        return "Ringer";
        break;
      case "jewelery":
        return "Smykker";
        break;
      case "bracelet":
        return "Armbånd";
        break;
      case "watch":
        return "Armbåndsur";
        break;
      case "earrings":
        return "Øredobber";
        break;
      default:
        return "we encountered a problem";
    }
  };

  const filters = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  const filterKeys = Object.keys(filters);

  return (
    <div>
      <div key={index} className="p-6 ">
        <div className="flex text-4xl items-center justify-center p-6">
          Vårt utvalg av {translator(Object.keys(catalogue)[index])}
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 ">


              {filters.silver && filters.woman  ? (
                <ProductDisplay
                  key={index}
                  path={`${Object.keys(catalogue)[index]}/${"woman"}/silver`}
                  product={kategori.woman.silver[0]}
                />
              ) : (
                <></>
              )}
              {filters.gold && filters.woman  ? (
                <ProductDisplay
                  key={index}
                  path={`${Object.keys(catalogue)[index]}/${"woman"}/gold`}
                  product={kategori.woman.gold[0]}
                />
              ) : (
                <></>
              )}


              {filters.silver && filters.man ? (
                <ProductDisplay
                  key={index}
                  path={`${Object.keys(catalogue)[index]}/${"man"}/silver`}
                  product={kategori.man.silver[0]}
                />
              ) : (
                <></>
              )}
              {filters.gold  && filters.man ? (
                <ProductDisplay
                  key={index}
                  path={`${Object.keys(catalogue)[index]}/${"man"}/gold`}
                  product={kategori.man.gold[0]}
                />
              ) : (
                <></>
              )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriDisplay;
