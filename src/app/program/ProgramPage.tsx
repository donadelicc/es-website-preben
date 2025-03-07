"use client";
import React, { useState } from "react";
import { ProgramStructurePage } from "@app/types";
import { Button } from "@app/components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProgramPageProps {
  program: ProgramStructurePage;
}

const splitIntoSentences = (text: string): string[] => {
  // Split by period followed by a space or end of string
  return text
    .split(/\.(?:\s+|$)/)
    .map(sentence => sentence.trim())
    .filter(sentence => sentence.length > 0); // Remove empty sentences
};

export default function ProgramPage({ program }: ProgramPageProps) {
  // Add null checks and default values
  if (!program) {
    return <div>Loading...</div>;
  }

  const sentences = splitIntoSentences(program.intro || '');
  const [currentProgressionIndex, setCurrentProgressionIndex] = useState(0);
  
  // Add null checks for programProgression
  const progressionSections = program.programProgression?.section || [];
  const progressionTitle = program.programProgression?.title || 'Program Progression';
  
  const displayedProgressions = progressionSections.slice(
    currentProgressionIndex,
    currentProgressionIndex + 2
  );

  const handleNextProgression = () => {
    setCurrentProgressionIndex((prev) =>
      prev + 2 >= progressionSections.length ? 0 : prev + 2
    );
  };

  const handlePreviousProgression = () => {
    setCurrentProgressionIndex((prev) =>
      prev - 2 < 0
        ? Math.floor((progressionSections.length - 1) / 2) * 2
        : prev - 2
    );
  };

  return (
    <main className="flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-6xl font-bold mb-8" style={{ color: "#f97316" }}>
        {program.title || 'Program'}
      </h1>
      
      {program.intro && (
        <div className="max-w-3xl text-gray-800 leading-relaxed w-full mb-8">
          {sentences.reduce((pairs, sentence, index) => {
            if (index % 2 === 0) {
              const pair = sentences[index + 1] 
                ? `${sentence}. ${sentences[index + 1]}.`
                : `${sentence}.`;
              pairs.push(
                <p key={index} className="mb-6 text-left text-lg">
                  {pair}
                </p>
              );
            }
            return pairs;
          }, [] as JSX.Element[])}
        </div>
      )}

      <div className="flex justify-center gap-4 flex-nowrap w-full">
        {(program.semesters || []).map((semester, index) => (
          <React.Fragment key={index}>
            <div className="bg-white p-4 shadow-md rounded-lg w-full md:w-1/5">
              <h2 className="text-xl font-bold mb-4 bg-orange-500 text-white p-2 rounded text-center"
              style={{
                color: "#f97316",
              }}
              >
                {semester.title}
              </h2>
              <div className="h-[100px] flex items-center justify-center mb-8"
               style={{
                backgroundColor: "#f97316",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
              }}>
                <p className="text-gray-700 text-center bg-orange-500 text-white p-2 rounded w-full">
                  {semester.topic}
                </p>
              </div>
              {semester.courses.map((course, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex items-center mb-1">
                    {course.credits && (
                      <span
                        className="border border-orange-500 text-orange-500 px-1 py-0.5 rounded mr-1"
                        style={{
                          color: "#f97316",
                          borderColor: "#f97316",
                        }}
                      >
                        {course.credits} SP
                      </span>
                    )}
                    <span className="font-semibold ml-2">{course.courseCode}</span>
                  </div>
                  <p className="text-gray-600">{course.title}</p>
                </div>
              ))}
              </div>
            {index === 1 && (
              <div className="mt-2 p-4 shadow-md rounded-lg w-full md:w-1/5">
                <h2 className="text-xl font-bold mb-6 text-center"
                style={{
                  color: "#f97316",
                }}
                >Boston</h2>
                <div className="h-[100px] flex items-center justify-center"
                style={{
                  backgroundColor: "#f97316",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}>
                  <p className="text-center bg-orange-500 text-white p-2 rounded w-full">
                    {program.bostonInfo.topic}
                  </p>
                </div>
                <p className="mb-8 mt-8">{program.bostonInfo.text}</p>
                <a
                  href={program.bostonInfo.url}
                  className="hover:underline font-bold"
                  style={{
                    color: "#f97316",
                  }}
                >
                  Les mer om sommerskolen i Boston
                </a>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {progressionSections.length > 0 && (
        <section className="my-6 w-10/12 md:w-[95%] mx-auto mb-32 mt-24">
          <div className="flex items-center justify-between mb-16">
            <div className="w-full text-center">
              <h2 className="text-4xl font-bold" style={{ color: "#f97316" }}>
                {progressionTitle}
              </h2>
            </div>
            {progressionSections.length > 2 && (
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePreviousProgression}
                  className="rounded-full"
                  style={{ backgroundColor: "#f97316" }}
                >
                  <FaChevronLeft className="h-4 w-4 text-white" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNextProgression}
                  className="rounded-full hover:bg-gray-100"
                  style={{ backgroundColor: "#f97316" }}
                >
                  <FaChevronRight className="h-4 w-4 text-white" />
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-16 mt-8">
            {displayedProgressions.map((section, index) => (
              <div
                key={index}
                className="p-8 bg-white shadow-lg rounded-lg w-full sm:w-[calc(90%-32px)] lg:w-[calc(60%-32px)] xl:w-[calc(40%-32px)]"
              >
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ color: "#f97316" }}
                >
                  {section.title}
                </h3>
                <p className="text-base text-gray-600">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {program.readMoreLink && (
        <a
          href={program.readMoreLink}
          className="mt-8 text-lg font-bold hover:underline"
          style={{ color: "#f97316" }}
        >
          Les mer
        </a>
      )}
    </main>
  );
}
