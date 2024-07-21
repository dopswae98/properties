"use client";
import React from "react";
import { NavigationMenuHeader } from "./NavigationMenu";
import { DropdownLoginBtn } from "./DropdownLoginBtn";
export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">LOGO</div>
        <NavigationMenuHeader />
        <DropdownLoginBtn />
        <div className="relative"></div>
      </div>
    </header>
  );
}
