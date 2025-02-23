import { HomePage } from "@app/types";
import { Title, H2 } from "@app/components";
import { FaLightbulb, FaRocket, FaBullseye, FaChartLine } from "react-icons/fa";
import React from "react";

interface InformationSectionProps {
  sections: HomePage["sections"];
}

const InformationSection = ({ sections }: InformationSectionProps) => {
  const icons = [FaLightbulb, FaRocket, FaBullseye, FaChartLine];

  return (
    <section className="w-full py-24 my-16 bg-[#FFF5E6]">
      <div className="w-10/12 md:w-3/5 mx-auto text-center">
        <Title>Mer enn en master</Title>
        <H2 className="text-gray-600 mt-2">
          NTNU's Entreprenørskole skiller seg ut på mer enn én måte.
        </H2>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-8 w-10/12 mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white [background-color:white] p-6 shadow-md rounded-lg text-center w-full sm:w-1/2 md:w-1/5 lg:w-1/5 flex flex-col min-h-[300px]"
          >
            <div className="flex justify-center mb-4">
              {React.createElement(icons[index % icons.length], {
                size: 40,
                style: { color: "#f97316" },
              })}
            </div>

            <H2 className="font-semibold">{section.title}</H2>
            <p className="text-gray-500 mt-2">{section.description}</p>

            <a
              href="#"
              className="text-black text-sm font-semibold mt-auto pt-4 inline-block"
            >
              Les mer om {section.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export { InformationSection };
