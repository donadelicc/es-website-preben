"use client";
import React, { useState } from "react";
import { ProgramStructurePage } from "@app/types";
import { Button } from "@app/components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PRIMARY_ORANGE, PRIMARY_BLUE } from "@app/constants/colors";

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

  const [expandedSemester, setExpandedSemester] = useState<number | null>(null);

  const toggleSemester = (index: number) => {
    setExpandedSemester(expandedSemester === index ? null : index);
  };

  return (
    <main className="flex flex-col items-center bg-gray-100 p-8">

      <header className="w-full flex justify-center py-16">
        <h1 className="text-6xl font-bold" style={{ color: PRIMARY_ORANGE }}>
          {program.title || 'Program'}
        </h1>
      </header>

      <h2 className="text-4xl font-bold mb-8" style={{ color: PRIMARY_BLUE }}>
        {program.introTitle || 'Introduction'}
      </h2>
      
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

      <div className="w-full max-w-3xl">
        {(program.semesters || []).map((semester, index) => (
          <div key={index} className="mb-4">
            {/* Combined container with border */}
            <div className="bg-white shadow-md rounded-lg border border-gray-200">
              {/* Semester Header - remove individual border/shadow */}
              <div 
                className="p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleSemester(index)}
              >
                <h2 className="text-xl font-medium" style={{ color: PRIMARY_BLUE }}>
                  {semester.title}
                </h2>
                <div style={{ color: PRIMARY_ORANGE }}>
                  {expandedSemester === index ? '−' : '+'}
                </div>
              </div>

              {/* Semester Content - now part of the same container */}
              {expandedSemester === index && (
                <div className="px-4 pb-4 space-y-4 border-t border-gray-200">
                  {semester.courses.map((course, idx) => (
                    <div key={idx} className="flex items-start space-x-4 pt-4">
                      {/* Credits Box */}
                      <div className="min-w-[48px] text-center">
                        <span
                          className="inline-block px-2 py-1 text-sm border rounded-md"
                          style={{
                            color: PRIMARY_ORANGE,
                            borderColor: PRIMARY_ORANGE,
                          }}
                        >
                          {course.credits}SP
                        </span>
                      </div>
                      
                      {/* Course Info */}
                      <div>
                        <div className="font-medium text-gray-900">{course.courseCode}</div>
                        <div className="text-gray-600">{course.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Boston Section */}
        <div className="mt-4">
          <div className="bg-white shadow-md rounded-lg border border-gray-200">
            {/* Header */}
            <div 
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => setExpandedSemester(expandedSemester === -1 ? null : -1)}
            >
              <h2 className="text-xl font-medium" style={{ color: PRIMARY_BLUE }}>Sommer</h2>
              <div style={{ color: PRIMARY_ORANGE }}>
                {expandedSemester === -1 ? '−' : '+'}
              </div>
            </div>

            {/* Content */}
            {expandedSemester === -1 && (
              <div className="px-4 pb-4 border-t border-gray-200">
                <p className="text-gray-600 pt-4 mb-4">{program.bostonInfo.text}</p>
                <a
                  href={program.bostonInfo.url}
                  className="font-medium hover:underline"
                  style={{ color: PRIMARY_ORANGE }}
                >
                  Les mer om sommerskolen i Boston
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {progressionSections.length > 0 && (
        <section className="my-6 w-10/12 md:w-[95%] mx-auto mb-32 mt-24">
          <div className="flex items-center justify-between mb-16">
            <div className="w-full text-center">
              <h2 className="text-4xl font-bold" style={{ color: PRIMARY_BLUE }}>
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
                  style={{ backgroundColor: PRIMARY_ORANGE }}
                >
                  <FaChevronLeft className="h-4 w-4 text-white" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNextProgression}
                  className="rounded-full hover:bg-gray-100"
                  style={{ backgroundColor: PRIMARY_ORANGE }}
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
                  style={{ color: PRIMARY_BLUE }}
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
          style={{ color: PRIMARY_ORANGE }}
        >
          Les mer
        </a>
      )}
    </main>
  );
}
