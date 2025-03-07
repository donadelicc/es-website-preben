import React from 'react';
import { SanityBlock } from "@app/components";
import { IconFileText, IconKey, IconChartBar, IconFiles } from "@tabler/icons-react";

const icons = [IconFileText, IconKey, IconChartBar, IconFiles];

interface ContentSectionProps {
  title: string;
  introText: any[]; // or Block[] if you import the Block type
  informationBoxes: {
    title: string;
    text: string;
  }[];
}

export function Content({ title, introText, informationBoxes }: ContentSectionProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="prose max-w-none mb-8">
        <SanityBlock blocks={introText} />
      </div>
      
      <div className="mt-16 flex flex-wrap justify-center gap-8 w-full">
        {informationBoxes.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 shadow-md rounded-lg text-left w-full sm:w-[90%] lg:w-[calc(50%-16px)] flex flex-col min-h-[200px]"
          >
            <div className="flex justify-start mb-6">
              {React.createElement(icons[index % icons.length], {
                size: 48,
                style: { color: "#f97316" },
              })}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 mt-4 text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}