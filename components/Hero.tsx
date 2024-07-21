"use client";
import { useState } from "react";

import SwitchControl from "./ToogleHero";
import { Search } from "lucide-react";

const Banner: React.FC = () => {
  const [propertyType, setPropertyType] = useState("");

  return (
    <div
      className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661963890332-64aca322d1e9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="flex space-x-4 mb-4">
        <SwitchControl />
      </div>
      <div className="bg-white shadow-md rounded-md p-4 flex items-center w-full max-w-3xl">
        <select
          className="bg-gray-100 p-2 rounded-md flex-grow-0 flex-shrink-0"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          style={{ flexBasis: "150px" }}
        >
          <option value="" disabled>
            Property Types
          </option>
          <option value="commercial">Commercial</option>
          <option value="educational">Educational</option>
          <option value="leisure-hospitality">Leisure/Hospitality</option>
          {/* Add more property types as needed */}
        </select>
        <input
          type="text"
          placeholder="Suburb, City, Province, Country"
          className="bg-gray-100 p-2 rounded-md flex-grow mx-2"
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center">
          <Search /> SEARCH
        </button>
      </div>
    </div>
  );
};

export default Banner;
