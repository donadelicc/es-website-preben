"use client";

import Image from "next/image";
import { Button } from "@app/components";
import Link from "next/link";
import { paths } from "@app/constants/page_links";
import { useColors } from "@app/context/ColorContext";

const Navbar = () => {
  const { navbarColor } = useColors();
  const isDarkBg = navbarColor === "bg-[#0B3B8F]";

  return (
    <div className={`${navbarColor} w-full py-4`}>
      <header className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href={"/"} passHref className={"group hidden md:block"}>
          <Image
            src={"/NSE.png"}
            alt={"NSE Logo"}
            width={250}
            height={80}
            className={"group-hover:opacity-80 transition-opacity"}
          />
        </Link>

        <nav className="flex items-center gap-8">
          {paths
            .filter((path) => path !== "/sok")
            .map((path) => (
              <Link
                key={path}
                href={path}
                className={`text-sm hover:text-orange-500 transition-colors ${
                  isDarkBg ? "text-white" : "text-black"
                }`}
              >
                {path === "/"
                  ? "Hjem"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
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
    </div>
  );
};

export { Navbar };
