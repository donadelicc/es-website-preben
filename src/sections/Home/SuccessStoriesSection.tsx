"use client";

import { useState } from "react";
import Image from "next/image";
import { urlForImage } from "@app/config";
import { HomePage } from "@app/types";
import { Title, H2, Card, CardContent, CardHeader, CardTitle, Button } from "@app/components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SuccessStoriesSectionProps {
  successStories: HomePage["successStories"];
}

const SuccessStoriesSection = ({ successStories }: SuccessStoriesSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayedStories = successStories.slice(currentIndex, currentIndex + 2);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev + 2 >= successStories.length ? 0 : prev + 2
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev - 2 < 0 ? Math.floor((successStories.length - 1) / 2) * 2 : prev - 2
    );
  };

  return (
    <section className="my-6 w-10/12 md:w-3/5 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="w-full text-center">
          <Title>Suksesshistorier</Title>
        </div>
        {successStories.length > 2 && (
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full"
              style={{ backgroundColor: '#f97316'}}
            >
              <FaChevronLeft className="h-4 w-4 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="rounded-full hover:bg-gray-100"
              style={{ backgroundColor: '#f97316' }}
            >
              <FaChevronRight className="h-4 w-4 text-white" />
            </Button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {displayedStories.map((story) => (
          <Card key={story.name} className="p-6 bg-white shadow-lg rounded-lg">
            <div className="flex items-center gap-4">
              <Image
                src={urlForImage(story.image)}
                alt={story.name}
                width={80}
                height={80}
                className="rounded-full border-2 border-gray-100 shadow-sm"
              />
              <CardHeader className="p-0">
                <CardTitle>{story.name}</CardTitle>
                <H2 className="text-sm">{story.position}</H2>
              </CardHeader>
            </div>
            <CardContent className="mt-4">
              <p>{story.story}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export { SuccessStoriesSection };
