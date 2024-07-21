import React from "react";
import PropertyDetail from "../../../components/PropertyDetails";
import { Properties } from "../../../db/data";
import type { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const property = Properties.find((prop) => prop.id === params.id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return <PropertyDetail id={params.id} />;
};

export async function generateMetadata(
  {
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const property = Properties.find((prop) => prop.id === id);

  const defaultMetadata = {
    title: "Find Your Dream Property - Property Listings",
    description:
      "Explore a wide range of properties available for buying, selling, and renting. Find your dream home with our comprehensive property listings.",
    image: "/default-property-image.jpg",
    icons: "/default-property-icon.png",
    metadataBase: new URL("https://www.britelink.io"),
    noIndex: false,
  };

  if (!property) {
    return {
      title: defaultMetadata.title,
      description: defaultMetadata.description,
      openGraph: {
        title: defaultMetadata.title,
        description: defaultMetadata.description,
        images: [
          {
            url: defaultMetadata.image,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: defaultMetadata.title,
        description: defaultMetadata.description,
        images: [defaultMetadata.image],
        creator: "@tinotendajoe01",
      },
      icons: defaultMetadata.icons,
      metadataBase: defaultMetadata.metadataBase,
      ...(defaultMetadata.noIndex && {
        robots: {
          index: false,
          follow: false,
        },
      }),
    };
  }

  return {
    title: `${property.name} - ${property.address}`,
    description: property.description,
    openGraph: {
      title: `${property.name} - ${property.address}`,
      description: property.description,
      images: [
        {
          url: property.image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.name} - ${property.address}`,
      description: property.description,
      images: [property.image],
      creator: "@tinotendajoe01",
    },
    icons: property.image, // Assuming you want to use the property image as the icon
    metadataBase: new URL("https://www.***"),
  };
}

export default Page;
