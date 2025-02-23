"use client";

import Image from "next/image";
import { urlForImage } from "@app/config";
import { Button, H2, Title } from "@app/components";
import Link from "next/link";
import { useMediaQuery } from "@app/hooks";
import { HomePage } from "@app/types";
import { HeaderSectionWrapper } from "@app/sections";
import { useState } from "react";

interface HeaderSectionProps {
  title: HomePage["title"];
  description: HomePage["description"];
  image: HomePage["image"];
  cta: HomePage["cta"];
}

const HeaderSection = ({ title, image, description, cta }: HeaderSectionProps) => {
  const isMd = useMediaQuery("(max-width: 768px)");
  const [imageHeight, setImageHeight] = useState<number>(400);

  return (
    <HeaderSectionWrapper minHeight={imageHeight}>
      <div className="w-10/12 md:w-4/5 flex flex-col md:flex-row justify-between items-center mx-auto my-16">
        {/* ✅ Hero Image - Moved to top for mobile */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:order-2">
          <Image
            src={urlForImage(image)}
            alt="Hero Image"
            width={500}
            height={400}
            className="rounded-lg shadow-md w-full"
            onLoad={({ target }) => setImageHeight((target as HTMLImageElement).naturalHeight)}
          />
        </div>

        {/* ✅ Text Content */}
        <div className="w-full md:w-1/2 text-left md:order-1">
          <Title className="text-secondary">{title}</Title>
          <H2 className="mt-2 text-lg md:text-xl">{description}</H2>

          {/* ✅ CTA Button */}
          {cta && (
            <div className="mt-4 flex gap-2">
              <Button variant="default" asChild size="lg" className="px-16 py-6 text-lg">
                <Link href={cta.link}>{cta.text}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </HeaderSectionWrapper>
  );
};

export { HeaderSection };
