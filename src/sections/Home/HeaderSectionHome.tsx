"use client";

import Image from "next/image";
import { urlForImage } from "@app/config";
import { Button, H2, Title } from "@app/components";
import Link from "next/link";
import { useMediaQuery } from "@app/hooks";
import { HomePage } from "@app/types";
import { HeaderSectionWrapper } from "@app/sections";
import { useRef, useState } from "react";

interface HeaderSectionHomeProps {
  title: HomePage["title"];
  description: HomePage["description"];
  image: HomePage["image"];
}

const HeaderSectionHome = ({
  title,
  image,
  description,
}: HeaderSectionHomeProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number>(400);

  return (
    <HeaderSectionWrapper minHeight={imageHeight}>
      {!isMobile && (
        <Image
          src={urlForImage(image)}
          alt={"Picture for home page"}
          width={300}
          height={imageHeight}
          className={"absolute left-0 top-0"}
          onLoadingComplete={({ naturalHeight }) => {
            setImageHeight(naturalHeight);
          }}
        />)
      }
      <div className="w-4/5 md:w-3/5 z-10 flex flex-col justify-center items-center mx-auto">
        <Title className={"text-secondary text-center md:text-left"}>
          {title}
        </Title>
        <div className="flex flex-row md:flex-col justify-center md:justify-between mt-2 md:mt-0 items-center w-full">
          <H2 className="mt-2 w-3/5 text-center hidden md:block">
            {description}
          </H2>
          <div className="mt-2 flex flex-col md:flex-row justify-center items-center">
            <Button
              variant="default"
              asChild
              size="lg"
              className="w-full md:w-1/2 mr-2"
            >
              <Link href={"/idea"}>Do you have an idea?</Link>
            </Button>
            <Button
              variant="default"
              asChild
              size="lg"
              className="w-full md:w-1/2 ml-0 md:ml-2 mr-2 md:mr-0 mt-2 md:mt-0"
            >
              <Link href={"/sok"}>How to apply</Link>
            </Button>
          </div>
        </div>
      </div>
    </HeaderSectionWrapper>
  );
};

export { HeaderSectionHome };
