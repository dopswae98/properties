export interface Property {
  id: any;
  name: string;
  address: string;
  beds: number;
  baths: number;
  size: number;
  image: string;
  price: string;
  description: string;
}
interface Metadata {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    images: { url: string }[];
    url: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
    creator: string;
  };
  icons: string;
  metadataBase: URL;
  keywords: string;
  meta: { name?: string; content?: string; property?: string }[];
  robots?: {
    index: boolean;
    follow: boolean;
  };
}
