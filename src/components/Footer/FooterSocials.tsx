import Link from "next/link";
import { NSE_FB_URL, NSE_IG_URL } from "@app/constants";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

const FooterSocials = () => {
  return (
    <div className="flex justify-end items-center flex-1">
      <Link href={NSE_FB_URL} passHref target={"_blank"}>
        <IconBrandFacebook
          size={40}
          className="text-card-foreground md:text-primary-foreground"
          stroke={1.5}
        />
      </Link>
      <Link href={NSE_IG_URL} passHref target={"_blank"}>
        <IconBrandInstagram
          size={40}
          className="text-card-foreground md:text-primary-foreground ml-4"
          stroke={1.5}
        />
      </Link>
    </div>
  );
};

export { FooterSocials };
