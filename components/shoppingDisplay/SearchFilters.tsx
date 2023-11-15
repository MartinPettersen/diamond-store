import React from "react";

import type { RootState } from "../../app/globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { goldHandler, silverHandler, manHandler, womanHandler } from "@/app/globalRedux/Features/filters/filterSlice";

const SearchFilters = () => {

  

  const filters = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  

  return (
    <div className="w-full">
      {/* lav til høy pris*/}
      {/* Høy til lav pris*/}
      {/* in between X and Y */}
      <div className="w-full flex items-center justify-center gap-16  ">
        <div className="" onClick={() => dispatch(goldHandler())}>
          <label htmlFor="gold" className="p-[1px]">
            Gull 
          </label>
          <input type="checkbox" id="gold" name="gold" defaultChecked={filters.gold} className=""  />
        </div >
        <div className="" onClick={() => dispatch(silverHandler())}>
          <label htmlFor="silver" className="p-[1px]">
            Sølv
          </label>
          <input type="checkbox" id="silver" name="silver" defaultChecked={filters.silver} className="" />
        </div>
        <div className="" onClick={() => dispatch(womanHandler())}>
          <label htmlFor="woman" className="p-[1px]">
            Dame
          </label>
          <input type="checkbox" id="woman" name="woman" defaultChecked={filters.woman} className="" />
        </div>
        <div className="" onClick={() => dispatch(manHandler())}>
          <label htmlFor="man" className="p-[1px]">
            Herre
          </label>
          <input type="checkbox" id="man" name="man" defaultChecked={filters.man} className="" />
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
