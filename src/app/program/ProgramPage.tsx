"use client";
import React, { useState, useEffect } from "react";
import { ProgramStructurePage } from "@app/types";
import { Button } from "@app/components";
import { H1, H3 } from "@app/components/Typography";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PRIMARY_ORANGE } from "@app/constants/colors";
import { NavigationSidebar } from "@app/components/NavigationSidebar";

interface ProgramPageProps {
  program: ProgramStructurePage;
}

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: "introduction", title: "Introduksjon" },
  { id: "semesters", title: "Semestre" },
  { id: "progression", title: "Studieforløpet" },
];

const splitIntoSentences = (text: string): string[] => {
  // Split by period followed by a space or end of string
  return text
    .split(/\.(?:\s+|$)/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0); // Remove empty sentences
};

export default function ProgramPage({ program }: ProgramPageProps) {
  const [currentProgressionIndex, setCurrentProgressionIndex] = useState(0);

  // Add null checks for programProgression
  const progressionSections = program.programProgression?.section || [];
  const progressionTitle =
    program.programProgression?.title || "Program Progression";

  const sentences = splitIntoSentences(program.intro || "");

  // Add state for tracking window width
  const [isMobile, setIsMobile] = useState(false);

  // Add useEffect to handle window resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    // Set initial value
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayedProgressions = progressionSections.slice(
    currentProgressionIndex,
    currentProgressionIndex + (isMobile ? 1 : 2),
  );

  const handleNextProgression = () => {
    setCurrentProgressionIndex((prev) => {
      const increment = isMobile ? 1 : 2;
      return prev + increment >= progressionSections.length
        ? 0
        : prev + increment;
    });
  };

  const handlePreviousProgression = () => {
    setCurrentProgressionIndex((prev) => {
      const increment = isMobile ? 1 : 2;
      if (prev - increment < 0) {
        // Go to the last valid index
        const lastValidIndex = isMobile
          ? progressionSections.length - 1
          : Math.floor((progressionSections.length - 1) / 2) * 2;
        return lastValidIndex;
      }
      return prev - increment;
    });
  };

  const [expandedSemester, setExpandedSemester] = useState<number | null>(null);

  const toggleSemester = (index: number) => {
    setExpandedSemester(expandedSemester === index ? null : index);
  };

  return (
    <>
      <div className="flex gap-8">
        <div className="hidden md:block w-64 mt-32 mb-24">
          <NavigationSidebar sections={sections} />
        </div>

        <main className="flex-1">
          <H1 className="text-5xl font-bold mb-24">
            {program.title || "Program"}
          </H1>

          {/* Introduction section */}
          <div id="introduction">
            <H3 className="mb-8">{program.introTitle || "Introduksjon"}</H3>
            {program.intro && (
              <div className="text-gray-800 leading-relaxed mb-8">
                {sentences.reduce((pairs, sentence, index) => {
                  if (index % 2 === 0) {
                    const pair = sentences[index + 1]
                      ? `${sentence}. ${sentences[index + 1]}.`
                      : `${sentence}.`;
                    pairs.push(
                      <p
                        key={index}
                        className="mb-6 text-left text-base md:text-lg"
                      >
                        {pair}
                      </p>,
                    );
                  }
                  return pairs;
                }, [] as JSX.Element[])}
              </div>
            )}
          </div>

          {/* Semesters section */}
          <div id="semesters" className="w-full">
            {(program.semesters || []).map((semester, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white shadow-md rounded-lg border border-gray-200">
                  <div
                    className="p-3 md:p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSemester(index)}
                  >
                    <H3 className="text-lg md:text-xl font-medium">
                      {semester.title}
                    </H3>
                    <div style={{ color: PRIMARY_ORANGE }}>
                      {expandedSemester === index ? "−" : "+"}
                    </div>
                  </div>

                  {expandedSemester === index && (
                    <div className="px-3 md:px-4 pb-3 md:pb-4 space-y-3 md:space-y-4 border-t border-gray-200">
                      {semester.courses.map((course, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 md:space-x-4 pt-3 md:pt-4"
                        >
                          <div className="min-w-[45px] md:min-w-[48px] text-center">
                            <span
                              className="inline-block px-1.5 md:px-2 py-0.5 md:py-1 text-sm border rounded-md"
                              style={{
                                color: PRIMARY_ORANGE,
                                borderColor: PRIMARY_ORANGE,
                              }}
                            >
                              {course.credits}SP
                            </span>
                          </div>

                          <div>
                            <div className="font-medium text-gray-900 text-sm md:text-base">
                              {course.courseCode}
                            </div>
                            <div className="text-gray-600 text-sm md:text-base">
                              {course.title}
                            </div>
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
                <div
                  className="p-3 md:p-4 cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    setExpandedSemester(expandedSemester === -1 ? null : -1)
                  }
                >
                  <H3 className="text-lg md:text-xl font-medium">Sommer</H3>
                  <div style={{ color: PRIMARY_ORANGE }}>
                    {expandedSemester === -1 ? "−" : "+"}
                  </div>
                </div>

                {expandedSemester === -1 && (
                  <div className="px-3 md:px-4 pb-3 md:pb-4 border-t border-gray-200">
                    <p className="text-gray-600 pt-3 md:pt-4 mb-4 text-sm md:text-base">
                      {program.bostonInfo.text}
                    </p>
                    <a
                      href={program.bostonInfo.url}
                      className="font-medium hover:underline text-sm md:text-base"
                      style={{ color: PRIMARY_ORANGE }}
                    >
                      Les mer om sommerskolen i Boston
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Program Progression section */}
          {progressionSections.length > 0 && (
            <section id="progression" className="my-12 md:my-24">
              <div className="relative flex flex-col md:flex-row items-center justify-between mb-8 md:mb-16">
                <div className="w-full text-center md:text-left pr-16">
                  <H3 className="md:text-4xl">{progressionTitle}</H3>
                </div>
                {progressionSections.length > 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handlePreviousProgression}
                      className="rounded-full"
                      style={{ backgroundColor: PRIMARY_ORANGE }}
                    >
                      <FaChevronLeft className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleNextProgression}
                      className="rounded-full hover:bg-gray-100"
                      style={{ backgroundColor: PRIMARY_ORANGE }}
                    >
                      <FaChevronRight className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-16">
                {(isMobile
                  ? [displayedProgressions[0]]
                  : displayedProgressions
                ).map((section, index) => (
                  <div
                    key={index}
                    className="p-6 md:p-8 bg-white shadow-lg rounded-lg w-[calc(100%-2rem)] md:w-[calc(50%-32px)]"
                  >
                    <H3 className="text-lg md:text-xl font-bold mb-4">
                      {section.title}
                    </H3>
                    <p className="text-sm md:text-base text-gray-600">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {program.readMoreLink && (
            <div className="w-full max-w-3xl text-center">
              <a
                href={program.readMoreLink}
                className="mt-8 text-base md:text-lg font-bold hover:underline"
                style={{ color: PRIMARY_ORANGE }}
              >
                Les mer
              </a>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
