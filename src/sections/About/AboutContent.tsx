import { AboutPage } from "@app/types";
import { H1, P } from "@app/components";
import Image from "next/image";
import { urlForImage } from "@app/config";
import { FullWidthContainer } from "@app/components/FullWidhtContainter";

interface AboutContentProps {
  about: AboutPage;
}

export const AboutContent = ({ about }: AboutContentProps) => {
  return (
    <FullWidthContainer bgColor="bg-[#F0F7FF]">
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-24">
        {/* Title section */}
        <H1 className="text-5xl font-bold mb-16 text-center text-white pt-16">
          {about.title}
        </H1>

        <div className="space-y-12">
          {/* Title text - now left-aligned but centered on page */}
          <div className="max-w-3xl mx-auto text-left">
            <P className="text-white">{about.titleText}</P>
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

          {/* Text content in shadowed boxes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {about.aboutText.split("\n\n").map((paragraph, index) => (
              <div key={index} className="bg-white p-8 shadow-md rounded-lg">
                <P>{paragraph}</P>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FullWidthContainer>
  );
};
