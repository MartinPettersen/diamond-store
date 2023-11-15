"use client";

import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/globalRedux/store";
import translator from "@/utils/translate";
import { categoriHandler } from "@/app/globalRedux/Features/filters/filterSlice";

const CategoryNavBar = () => {
  const catalogue = useSelector(
    (state: RootState) => state.catalogue.catalogue
  );
  const dispatch = useDispatch();

  return (
    <div className="w-full flex items-center justify-center gap-16  ">
      {Object.keys(catalogue).map((kategori: string, index) => (
        <Link key={index} href={`/showcase/${kategori}`}>
          <div
            className="capitalize hover:cursor-pointer border-b-2 border-white hover:border-gray-900"
            key={index}
            onClick={() => dispatch(categoriHandler(kategori))}
          >
            {translator(kategori)}{" "}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryNavBar;
