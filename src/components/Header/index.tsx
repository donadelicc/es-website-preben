"use client";

import Image from "next/image";
import { Button } from "@app/components";
import Link from "next/link";
import { useMediaQuery } from "@app/hooks";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
  ResponsiveNavigationMenu,
} from "@app/components/Menu";
import { IconMenu2 } from "@tabler/icons-react";
import { FooterSocials } from "@app/components/Footer";

const Header = () => {
  const isMobileScreen = useMediaQuery("(max-width: 640px)");
  const isCollaped = useMediaQuery("(max-width: 1040px)");
  const orientation = isCollaped ? "vertical" : "horizontal";

  return (
    <header className="flex justify-between items-center px-8 py-4">
      <Link href={"/"} passHref className={"group"}>
        <Image
          src={"/NSE.png"}
          alt={"NSE Logo"}
          width={isMobileScreen ? 175 : 250}
          height={80}
          className={"group-hover:opacity-80 transition-opacity"}
        />
      </Link>
      {isCollaped ? (
        <Sheet>
          <SheetTrigger asChild className="ml-auto">
            <Button size="icon" variant="secondary">
              <IconMenu2 size={30} />
            </Button>
          </SheetTrigger>
          <SheetContent
            style={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ResponsiveNavigationMenu orientation={orientation} />
            <SheetFooter>
              <div className="flex justify-center items-center">
                <FooterSocials />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ) : (
        <ResponsiveNavigationMenu orientation={orientation} />
      )}
    </header>
  );
};

export { Header };
