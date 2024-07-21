"use client";

import React, { useState } from "react";

export default function SwitchControl() {
  const [selected, setSelected] = useState("forSale");
  return (
    <div className="flex items-center p-1 bg-gray-200 rounded-full w-max">
      <button
        onClick={() => setSelected("forSale")}
        className={`px-4 py-2 rounded-full ${
          selected === "forSale" ? "bg-red-600 text-white" : "text-gray-500"
        }`}
      >
        For Sale
      </button>
      <button
        onClick={() => setSelected("toRent")}
        className={`px-4 py-2 rounded-full ${
          selected === "toRent" ? "bg-red-600 text-white" : "text-gray-500"
        }`}
      >
        To Rent
      </button>
    </div>
  );
}
