"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
// make it a client component so that it is interactive

import { UserIcon } from "@heroicons/react/24/solid";

import type { RootState } from "../app/globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { categoriHandler } from "@/app/globalRedux/Features/filters/filterSlice";

import Link from "next/link";
import SearchButton from "./SearchButton";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";

import { useRouter } from "next/navigation";
import TopHeader from "./TopHeader";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.items);
  const catalogue = useSelector(
    (state: RootState) => state.catalogue.catalogue
  );
  const dispatch = useDispatch();

  const filters = useSelector((state: RootState) => state.filter);

  const translator = (expr: string) => {
    switch (expr) {
      case "Ring":
        return "Ringer";
        break;
      case "Necklace":
        return "Smykker";
        break;
      case "Bracelet":
        return "Armbånd";
        break;
      case "Watch":
        return "Armbåndsur";
        break;
      case "Earring":
        return "Øredobber";
        break;
      default:
        return "we encountered a problem";
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/searchResults/${searchTerm}`);

  }

  return (
    <header className="flex flex-col items-center border-b-2 border-gray-100 ">
      <TopHeader />
      <Link href="/">
        <div className="">
          <div className="pt-6 pb-2">
            <h1 className="text-4xl ">DinGullsmed</h1>
            <p>Your Diamond in the rough</p>
          </div>
        </div>
      </Link>

      <div className="w-full md:max-w-lg flex flex-1 flex-row items-center pb-4 pt-2 ">
        <form onSubmit={handleSearch} className="w-full">
          <div className="flex flex-1 items-center gap-2 w-full px-4">
            
              <div className="flex flex-1 items-center space-x-2 bg-white rounded-xl border px-2 py-2 md:max-w-sm">
                <input
                  type="text"
                  name="searchProducts"
                  placeholder="Søk etter Produkt"
                  className="outline-none flex-1  "
                  onChange={e=>setSearchTerm(e.target.value)}
                />
                <SearchButton />
              </div>
            {/*
            <input type="submit" value="Søk" />
            */}
          </div>
        </form>
        <div className="flex felx-1 gap-3">
          <div>
            {/* Bruker ikon */}
            <UserIcon className="h-8 w-8" />
          </div>
          <div>
            {/* Handlevogn ikon */}
            <Link href="/shoppingCart" className="flex items-center">
              <ShoppingCartIcon className="h-8 w-8" />
              <div className="bg-orange-400 text-white flex items-center justify-center ml-[-14px] w-5 h-5 rounded-full mt-[-18px]">
                {cart.length}
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-2 border-b-2 border-t-2 border-gray-800 bg-rose-50">
        {Object.keys(catalogue).map((kategori: string, index) => (
          <Link key={index} href={`/showcase/${kategori}`}>
            <div
              className="capitalize hover:cursor-pointer"
              key={index}
              onClick={() => dispatch(categoriHandler(kategori))}
            >
              {translator(kategori)}{" "}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
