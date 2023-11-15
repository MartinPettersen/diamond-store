import { UserIcon } from "@heroicons/react/24/solid";

import type { RootState } from "../../app/globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { categoriHandler } from "@/app/globalRedux/Features/filters/filterSlice";

import Link from "next/link";
import SearchButton from "./SearchButton";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { useRouter } from "next/navigation";
import TopHeader from "./TopHeader";
import { useEffect, useState } from "react";
import translator from "@/utils/translate";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SearchFunction from "./SearchFunction";
import ShoppingCartButton from "./ShoppingCartButton";
import Logo from "./Logo";
import CategoryNavBar from "./CategoryNavBar";

const Header = async() => {
  const session = await getServerSession(options)

  return (
    <header className="flex flex-col items-center  ">
      <TopHeader />
      <div className="flex  w-[100%] justify-around">
        <Logo />
        <div className="w-full md:max-w-lg flex flex-1 flex-row items-center pb-4 pt-2 ">
          <SearchFunction />
          <div className="flex felx-1 gap-3">
            <div>
              <UserIcon className="h-8 w-8" />
            </div>
            <div>
              <ShoppingCartButton />
            </div>
          </div>
        </div>
      </div>
      <CategoryNavBar />
    </header>
  );
};

export default Header;
