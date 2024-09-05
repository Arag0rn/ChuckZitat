import Image from "next/image";
import React from "react";
import logo from "../images/logo.svg";

export const Header = () => {
  return (
    <header className="bg-black text-white p-8 w-full text-center">
      <div className="flex items-center m-auto gap-60 max-h-15 max-w-4xl justify-between">
        <Image src={logo} alt="logo"></Image>
        <h1 className="text-2xl">Chuck Norris Quotes</h1>
      </div>
    </header>
  );
};
