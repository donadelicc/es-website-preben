"use client";

import Image from "next/image";
import { Button } from "@app/components";
import Link from "next/link";
import { paths } from "@app/constants/page_links";
import { FullWidthContainer } from "../FullWidhtContainter";

const Navbar = () => {
  const getDisplayName = (path: string) => {
    if (path === "/") return "Hjem";
    if (path === "/sok") return "Søk";
    return path.slice(1).charAt(0).toUpperCase() + path.slice(2);
  };

  const navigationLinks = paths.filter((path) => path !== "/sok");

  return (
    <FullWidthContainer bgColor="bg-white">
      <header className="flex justify-between items-center py-4 mt-6">
        <Link href={"/"} passHref className={"group"}>
          <Image
            src={"/NSE.png"}
            alt={"NSE Logo"}
            width={250}
            height={80}
            className={"group-hover:opacity-80 transition-opacity"}
          />
        </Link>

        <nav className="flex items-center gap-8">
          {navigationLinks.map((path) => (
            <Link
              key={path}
              href={path}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {getDisplayName(path)}
            </Link>
          ))}
          <Link href="/sok">
            <Button
              className="px-8 py-2"
              style={{
                backgroundColor: "#f97316",
                color: "#ffffff",
              }}
            >
              Søk
            </Button>
          </Link>
        </nav>
      </header>
    </FullWidthContainer>
  );
};

export { Navbar };
