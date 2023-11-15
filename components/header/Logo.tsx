import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="">
        <div className="pt-6 pb-2">
          <h1 className="text-4xl ">DinGullsmed</h1>
          <p>Your Diamond in the rough</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
