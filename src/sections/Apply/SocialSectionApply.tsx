"use client";

import Link from "next/link";
import { NSE_FB_URL, NSE_IG_URL, NSE_LINKEDIN_URL } from "@app/constants";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Button } from "@app/components";
import { useMediaQuery } from "@app/hooks";

const SocialSectionApply = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const iconSize = isMobile ? 50 : 100;

  return (
    <div className="py-4 shadow-lg rounded-md w-10/12 md:w-2/5 flex flex-col justify-center items-center">
      <div className="flex flex-row items-stretch justify-around w-full">
        <Link href={NSE_FB_URL} passHref target="_blank">
          <IconBrandFacebook
            size={iconSize}
            stroke={1.5}
            className="text-card-foreground transition-colors duration-300 hover:text-card-foreground/80"
          />
        </Link>
        <Link href={NSE_LINKEDIN_URL} passHref target="_blank">
          <IconBrandLinkedin
            size={iconSize}
            stroke={1.5}
            className="text-card-foreground transition-colors duration-300 hover:text-card-foreground/80"
          />
        </Link>
        <Link href={NSE_IG_URL} passHref target="_blank">
          <IconBrandInstagram
            size={iconSize}
            stroke={1.5}
            className="text-card-foreground transition-colors duration-300 hover:text-card-foreground/80"
          />
        </Link>
      </div>
      <Button className="w-10/12 md:1/2 mt-4" asChild>
        <Link href="/about">Lær mer om Entrepenørskolen</Link>
      </Button>
    </div>
  );
};

export { SocialSectionApply };
