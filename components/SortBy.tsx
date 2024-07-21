"use client";
import React, { useState } from "react";

const SortBy: React.FC = () => {
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="flex justify-between items-center mb-4 px-4 py-2 bg-white shadow-md rounded-md">
      <div className="flex items-center">
        <span className="text-gray-600 mr-2">Sort by:</span>
        <select
          className="bg-gray-100 p-2 rounded-md"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Select</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="beds-asc">Beds: Few to Many</option>
          <option value="beds-desc">Beds: Many to Few</option>
        </select>
      </div>
      <span className="text-gray-600">10 Search Results</span>
    </div>
  );
};

export default SortBy;
