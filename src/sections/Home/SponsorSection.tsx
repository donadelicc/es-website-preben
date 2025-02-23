import Image from "next/image";
import { urlForImage } from "@app/config";
import { HomePage } from "@app/types";

interface SponsorSectionProps {
  sponsors: HomePage["partners"];
}

const SponsorSection = ({ sponsors }: SponsorSectionProps) => {
  return (
    <section className="w-full pt-8 pb-16 border-t border-gray-300 flex justify-center">
      <div className="w-10/12 md:w-3/5 flex flex-wrap justify-center gap-6 opacity-50">
        {sponsors.map((logo, index) => (
          <Image
            key={index}
            src={urlForImage(logo)}
            alt="Sponsor Logo"
            width={60}
            height={25}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export { SponsorSection };
