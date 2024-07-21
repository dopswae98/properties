"use client";
import React, { useState } from "react";

const FilterSidebar: React.FC = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");

  return (
    <div className="bg-white shadow-md rounded-md p-2 w-full">
      <select
        className="bg-gray-100 p-2 rounded-md w-full mb-4"
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
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
        className="bg-gray-100 p-2 rounded-md w-full mb-4"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Min. Price"
          className="bg-gray-100 p-2 rounded-md w-full"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Max. Price"
          className="bg-gray-100 p-2 rounded-md w-full"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Min. Beds"
          className="bg-gray-100 p-2 rounded-md w-full"
          value={minBeds}
          onChange={(e) => setMinBeds(e.target.value)}
        />
        <input
          type="text"
          placeholder="Max. Beds"
          className="bg-gray-100 p-2 rounded-md w-full"
          value={maxBeds}
          onChange={(e) => setMaxBeds(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
