import React from "react";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";

const UserButton = () => {
  return (
    <Link href="/userpage" className="flex items-center">
      <UserIcon className="h-8 w-8" />
    </Link>
  );
};

export default UserButton;
