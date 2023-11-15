'use client'

import React, { useState } from "react";
import SearchButton from "./SearchButton";
import { useRouter } from "next/navigation";

const SearchFunction = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/searchResults/${searchTerm}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="w-full">
        <div className="flex flex-1 items-center gap-2 w-full px-4">
          <div className="flex flex-1 items-center space-x-2 bg-white rounded-xl border px-2 py-2 md:max-w-sm">
            <input
              type="text"
              name="searchProducts"
              placeholder="Søk etter Produkt"
              className="outline-none flex-1  "
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
            <SearchButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFunction;
