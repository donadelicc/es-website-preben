"use client";

import { Button, H2, Title } from "@app/components";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@app/config";
import { AboutPage } from "@app/types";
import { useMediaQuery } from "@app/hooks";
import { HeaderSectionWrapper } from "@app/sections";
import { useRef } from "react";

interface HeaderSectionAboutProps {
  title: AboutPage["title"];
  description: AboutPage["description"];
  image: AboutPage["image"];
}

const HeaderSectionAbout = ({
  title,
  image,
  description,
}: HeaderSectionAboutProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <HeaderSectionWrapper minHeight={imageRef?.current?.height}>
      <div className="w-4/5 md:w-3/5 z-10 flex flex-col justify-center items-center mx-auto">
        <Title className={"text-secondary text-center md:text-left"}>
          {title}
        </Title>
        <H2 className="mt-2 w-3/5 text-center hidden md:block">
          {description}
        </H2>
        <div className="mt-6 flex flex-row items-center justify-center w-full">
          <Button
            variant="default"
            asChild
            size="lg"
            className="w-full md:w-1/4 ml-2"
          >
            <Link href={"/sok"}>How to apply</Link>
          </Button>
        </div>
      </div>
      {!isMobile && (
        <Image
          src={urlForImage(image)}
          alt={"Picture for about page"}
          width={300}
          height={200}
          className={"absolute right-0 top-0"}
          ref={imageRef}
        />
      )}
    </HeaderSectionWrapper>
  );
};

export { HeaderSectionAbout };
