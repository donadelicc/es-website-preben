"use client";

import { H2 } from "@app/components";
import { FullWidthContainer } from "@app/components/FullWidthContainer";
import Image from "next/image";
import { urlForImage } from "@app/config";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AlumniPage } from "@app/types";

interface AlumniStoriesProps {
  title: string;
  stories: AlumniPage['alumniStories'];
}

export function AlumniStories({ title, stories }: AlumniStoriesProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(stories.length / (typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1))
  );
  const storiesPerPage = typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1;

  useEffect(() => {
    const handleResize = () => {
      const newStoriesPerPage = window.innerWidth >= 768 ? 2 : 1;
      setCurrentPage(0);
      setTotalPages(Math.ceil(stories.length / newStoriesPerPage));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [stories.length]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  if (!stories?.length) return null;

  const currentStories = stories.slice(
    currentPage * storiesPerPage,
    (currentPage + 1) * storiesPerPage
  );

  return (
    <FullWidthContainer bgColor="bg-[#F0F7FF]">
      <div className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <div className="flex-1">
              <H2 className="text-left relative pb-4">
                {title}
                <div 
                  className="absolute bottom-0 left-0 w-16 h-1 bg-[#FF5C00]" 
                  style={{ transform: 'translateY(8px)' }}
                />
              </H2>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
                aria-label="Previous stories"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
                aria-label="Next stories"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentStories.map((story, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md p-8 ${
                  index === 1 && window.innerWidth < 768 ? 'hidden' : ''
                }`}
              >
                <div className="flex items-start gap-8">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={urlForImage(story.image)}
                      alt={story.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">{story.name}</h3>
                      <p className="text-gray-600">{story.roleInStartup}</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {story.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentPage ? 'bg-[#FF5C00]' : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </FullWidthContainer>
  );
}

export default AlumniStories;