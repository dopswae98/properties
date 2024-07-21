import React from "react";
import { Separator } from "@/components/ui/separator";
import { Heart, MessageCircle, Phone, Repeat2 } from "lucide-react";
import { Property } from "@/typings";
import Link from "next/link";
interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/listings/${property.id}`}>
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          {" "}
          <p className="text-sm font-semibold">Property Type</p>
          <h2 className="text-xl font-semibold">{property.name}</h2>
          <p className="text-gray-600">{property.address}</p>
          <div className="mt-2">
            <span className="text-sm">Beds: {property.beds}</span>{" "}
            <span className="text-sm">Baths: {property.baths}</span>{" "}
            <span className="text-sm">{property.size} SQM</span>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="mt-4 w-1/2 px-4 py-2 bg-transparent border border-red-500 text-red-500 rounded-lg">
                <MessageCircle />
              </button>
              <button className="mt-4 w-1/2 px-4 py-2 bg-transparent border border-red-500 text-red-500 rounded-lg">
                <Phone />
              </button>
            </div>
            <button className="mt-4 px-4 py-2 bg-transparent border border-red-500 text-red-500 rounded-lg">
              Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const PropertyCardListing: React.FC<PropertyCardProps> = ({
  property,
}) => {
  return (
    <Link href={`/listings/${property.id}`}>
      <div className="bg-white flex md:flex-col shadow-md rounded-lg overflow-hidden relative">
        <div className="relative">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover"
          />
          <div className="flex items-center justify-start gap-1 absolute top-2 w-full px-2">
            <button className="bg-blue-900 text-white px-2 py-1 rounded w-1/4">
              Featured
            </button>
            <button className="bg-green-500 text-white px-2 py-1 w-1/4 rounded">
              Rent
            </button>
          </div>
          <div className="absolute bottom-2 left-2 flex items-center justify-between text-white  px-2 py-1 rounded w-full">
            <p>${property.price}</p>
            <div className="flex items-center gap-2">
              <div className="bg-gray-600 bg-opacity-50 p-1 rounded">
                <Heart className="text-white" />
              </div>
              <div className="bg-gray-600 bg-opacity-50 p-1 rounded">
                <Repeat2 className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="text-sm font-semibold">Property Type</p>
          <h2 className="text-xl font-semibold">{property.name}</h2>
          <p className="text-gray-600">{property.address}</p>
          <div className="mt-2">
            <span className="text-sm">Beds: {property.beds}</span>{" "}
            <span className="text-sm">Baths: {property.baths}</span>{" "}
            <span className="text-sm">{property.size} SQM</span>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="mt-4 w-1/2 px-4 py-2 bg-transparent border border-red-500 text-red-500 rounded-lg">
                <MessageCircle />
              </button>
              <button className="mt-4 w-1/2 px-4 py-2 bg-transparent border border-red-500 text-red-500 rounded-lg">
                <Phone />
              </button>
            </div>
            <button className="mt-4 px-4 py-2 bg-transparent border border-red-500 text-red-500 rounded-lg">
              Details
            </button>
          </div>
        </div>
      </div>{" "}
    </Link>
  );
};

export default PropertyCard;
