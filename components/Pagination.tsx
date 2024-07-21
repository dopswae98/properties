"use client";
import React from "react";

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <button className="px-3 py-1 bg-gray-200 rounded-l-md">&laquo;</button>
      <button className="px-3 py-1 bg-gray-200">1</button>
      <button className="px-3 py-1 bg-gray-200">2</button>
      <button className="px-3 py-1 bg-gray-200">3</button>
      <button className="px-3 py-1 bg-gray-200">4</button>
      <button className="px-3 py-1 bg-gray-200">5</button>
      <button className="px-3 py-1 bg-gray-200">...</button>
      <button className="px-3 py-1 bg-gray-200 rounded-r-md">&raquo;</button>
    </div>
  );
};

export default Pagination;
