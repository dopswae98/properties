import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Find Your Dream Property - Property Listings",
  description = "Explore a wide range of properties available for buying, selling, and renting. Find your dream home with our comprehensive property listings.",
  image = "/default-property-image.jpg",
  icons = "/default-property-icon.png",

  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@tinotendajoe01",
    },
    icons,

    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
