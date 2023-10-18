"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchButton = () => {
  return (
    <button className=" disabled:opacity-50 disabled:cursor-not-allowed">
      <MagnifyingGlassIcon className="h-4 w-4" />
    </button>
  );
};

export default SearchButton;
