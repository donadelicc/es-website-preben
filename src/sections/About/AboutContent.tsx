import { AboutPage } from "@app/types";
import { H2, P } from "@app/components";
import Image from "next/image";
import { urlForImage } from "@app/config";

interface AboutContentProps {
  about: AboutPage;
}

export const AboutContent = ({ about }: AboutContentProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* Title section */}
      <div className="text-center py-12">
        <H2 className="text-4xl md:text-5xl font-bold mb-6">{about.title}</H2>
        <div className="max-w-3xl mx-auto">
          <P>{about.titleText}</P>
        </div>
      </div>

      {/* Image section */}
      {about.image && (
        <div className="w-full mb-12">
          <Image
            src={urlForImage(about.image)}
            alt="About NTNU School of Entrepreneurship"
            width={800}
            height={400}
            className="w-full max-w-3xl mx-auto rounded-lg"
          />
        </div>
      )}

      {/* Text content */}
      <div className="w-full mb-12">
        <P>{about.aboutText}</P>
      </div>
    </section>
  );
};
