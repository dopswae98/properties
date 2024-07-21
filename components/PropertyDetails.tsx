import React from "react";
import { Properties } from "../db/data"; // Adjust the import path

interface PropertyDetailProps {
  id: string;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ id }) => {
  const property = Properties.find((prop) => prop.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="text-2xl font-bold">{property.name}</h1>
            <p className="text-gray-600">{property.address}</p>
          </div>
          <p className="text-2xl font-bold">${property.price}</p>
        </div>
        <div className="relative">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="p-4 flex">
          <div className="w-3/4">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p className="text-gray-600 mb-4">{property.description}</p>
            <h2 className="text-xl font-bold mb-2">Property Details</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <p className="text-gray-600">
                <strong>Property ID:</strong> {property.id}
              </p>
              <p className="text-gray-600">
                <strong>Property Type:</strong> {property.name}
              </p>
              <p className="text-gray-600">
                <strong>Property Size:</strong> {property.size} Sq Ft
              </p>
              <p className="text-gray-600">
                <strong>Year Built:</strong> 2016
              </p>
              <p className="text-gray-600">
                <strong>Property Status:</strong> For Sale
              </p>
              <p className="text-gray-600">
                <strong>Property Price:</strong> ${property.price}
              </p>
            </div>
          </div>
          <div className="w-1/4 p-4 bg-gray-100 rounded-lg">
            <div className="flex justify-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Logo"
                className="h-16 w-16 object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">
              Housing Investment
            </h3>
            <div className="flex flex-col space-y-2 mb-4">
              <button className="bg-red-500 text-white py-2 rounded-md">
                Whatsapp Agent
              </button>
              <button className="bg-red-500 text-white py-2 rounded-md">
                Call Agent
              </button>
            </div>
            <form>
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-100 p-2 rounded-md w-full mb-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-100 p-2 rounded-md w-full mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 p-2 rounded-md w-full mb-2"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-gray-100 p-2 rounded-md w-full mb-2"
              />
              <textarea
                placeholder="Message"
                className="bg-gray-100 p-2 rounded-md w-full mb-2"
              />
              <button className="bg-red-500 text-white py-2 rounded-md w-full">
                Send Message
              </button>
            </form>
            <p className="text-gray-600 text-xs text-center mt-2">
              By sending enquiry messages, you agree to Sold.co.zw's{" "}
              <a href="#" className="text-blue-500">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
