import React from "react";
import Banner from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import InfoCard from "@/components/InfoCard";
import { Properties } from "../db/data";
import { Home } from "lucide-react";
import { constructMetadata } from "@/lib/utils";
export const metadata = constructMetadata();
const page = () => {
  return (
    <div>
      <Banner />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Properties For Sale</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Properties For Rent</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard
            title="Buy a Property"
            description="Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
            buttonText="Browse Properties For Sale"
            buttonLink="#"
            icon={<Home />}
          />
          <InfoCard
            title="Sell a Property"
            description="Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
            buttonText="See your options"
            buttonLink="#"
            icon={<Home />}
          />
          <InfoCard
            title="Rent a Property"
            description="Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
            buttonText="Find Rentals"
            buttonLink="#"
            icon={<Home />}
          />
        </section>
      </main>
    </div>
  );
};

export default page;
