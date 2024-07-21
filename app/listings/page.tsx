import React from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import SortBy from "@/components/SortBy";
import { PropertyCardListing } from "@/components/PropertyCard";
import Pagination from "@/components/Pagination";
import { Properties } from "../../db/data";
import { constructMetadata } from "@/lib/utils";
export const metadata = constructMetadata();
const Listings: React.FC = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-8 flex">
        <aside className="w-1/4 mr-8">
          <FilterSidebar />
        </aside>
        <section className="w-3/4">
          <SortBy />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Properties.map((property, index) => (
              <PropertyCardListing key={index} property={property} />
            ))}
          </div>
          <Pagination />
        </section>
      </main>
    </div>
  );
};

export default Listings;
