"use client";

import { useMediaQuery } from "@app/hooks";
import { HeaderSectionWrapper } from "@app/sections";
import Image from "next/image";
import { urlForImage } from "@app/config";
import { SanityBlock, Title } from "@app/components";
import { AlumniOrganizationPage } from "@app/types";

interface AlumniSectionProps {
  image: AlumniOrganizationPage["image"];
  blocks: AlumniOrganizationPage["content"];
}

const AlumniSection = ({ image, blocks }: AlumniSectionProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <HeaderSectionWrapper>
      {!isMobile && (
        <Image
          src={urlForImage(image)}
          alt={"Picture for Alumni Organization section"}
          width={350}
          height={200}
        />
      )}
      <div className="md:mx-10">
        <div className="flex flex-row items-center justify-between">
          {isMobile && (
            <Image
              src={urlForImage(image)}
              alt={"Picture for Alumni Organization section"}
              width={200}
              height={150}
            />
          )}
          <Title className="text-accent text-4xl mx-auto md:mx-0 block md:hidden">
            ESAF
          </Title>
        </div>
        <div className="p-4 md:p-0">
          <SanityBlock blocks={blocks} />
        </div>
      </div>
    </HeaderSectionWrapper>
  );
};

export { AlumniSection };
