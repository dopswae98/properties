"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Luxury Family Homes",
    href: "",
    description:
      "Explore our selection of luxury family homes with top-notch amenities and prime locations.",
  },
  {
    title: "Modern Apartments",
    href: "",
    description:
      "Find modern apartments in the heart of the city with all the conveniences you need.",
  },
  {
    title: "Commercial Properties",
    href: "",
    description:
      "Discover commercial properties perfect for your business needs in prime locations.",
  },
  {
    title: "Rental Listings",
    href: "",
    description:
      "Browse our rental listings to find the perfect place to call home temporarily.",
  },
  {
    title: "New Developments",
    href: "",
    description:
      "Stay updated with the latest new developments in the real estate market.",
  },
  {
    title: "Real Estate Tips",
    href: "",
    description:
      "Get tips and advice on buying, selling, and renting properties.",
  },
];

export function NavigationMenuHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>For Sale</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href=""
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Real Estate Hub
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Your one-stop destination for all things real estate.
                      Explore properties, get expert advice, and stay informed.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="" title="Luxury Family Homes">
                Explore our selection of luxury family homes with top-notch
                amenities and prime locations.
              </ListItem>
              <ListItem href="" title="Modern Apartments">
                Find modern apartments in the heart of the city with all the
                conveniences you need.
              </ListItem>
              <ListItem href="" title="Commercial Properties">
                Discover commercial properties perfect for your business needs
                in prime locations.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>To Rent</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              New Developments
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Showdays
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Agencies
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
