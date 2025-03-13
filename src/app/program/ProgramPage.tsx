"use client";
import React, { useState } from "react";
import { ProgramStructurePage } from "@app/types";
import { H1, H3 } from "@app/components/Typography";
import { PRIMARY_ORANGE } from "@app/constants/colors";
import { ProgramNavigationWrapper } from "./ProgramNavigationWrapper";

interface ProgramPageProps {
  program: ProgramStructurePage;
}

interface Section {
  id: string;
  title: string;
}

interface Course {
  credits: number;
  courseCode: string;
  title: string;
  url: string;
}

const splitIntoSentences = (text: string): string[] => {
  // Split by period followed by a space or end of string
  return text
    .split(/\.(?:\s+|$)/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0); // Remove empty sentences
};

export default function ProgramPage({ program }: ProgramPageProps) {
  const sentences = splitIntoSentences(program.intro || "");
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  // Create an ordered array of all sections
  const orderedSections = program.sections?.reduce(
    (
      acc: {
        type: "semester" | "external";
        data: { courses: Course[] } | any;
        index: number;
      }[],
      semester,
      index,
    ) => {
      acc.push({ type: "semester", data: semester, index });

      if (index === 0 && program.cernInfo) {
        acc.push({ type: "external", data: program.cernInfo, index: 100 });
      }

      if (index === 1 && program.bostonInfo) {
        acc.push({ type: "external", data: program.bostonInfo, index: 101 });
      }

      return acc;
    },
    [],
  );

  // Add Berlin info at the end if it exists
  if (program.berlinInfo) {
    orderedSections?.push({
      type: "external",
      data: program.berlinInfo,
      index: 102,
    });
  }

  // Create navigation sections using topics instead of full titles
  const navigationSections: Section[] = [
    { id: "introduction", title: "Introduksjon" },
    ...(orderedSections?.map((section) => ({
      id: `section-${section.index}`,
      title: section.data.topic || section.data.title, // Use topic if available
    })) || []),
  ];

  return (
    <>
      <div className="flex gap-8">
        <ProgramNavigationWrapper
          navigationSections={navigationSections}
          expandedSections={expandedSections}
          toggleSection={toggleSection}
        />

        <main className="flex-1">
          <H1 className="text-5xl font-bold mb-24">
            {program.title || "Program"}
          </H1>

          {/* Introduction section - back to original styling */}
          <div id="introduction" className="mb-8">
            <H3 className="mb-8">{program.introTitle || "Introduksjon"}</H3>
            <div className="text-gray-800 leading-relaxed">
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
          </div>

          {/* Updated Semesters and External Programs section */}
          <div id="semesters" className="w-full space-y-4">
            {orderedSections?.map((section, arrayIndex) => (
              <div key={arrayIndex} id={`section-${section.index}`}>
                <div className="bg-white shadow-md rounded-lg border border-gray-200">
                  <div
                    className="p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection(section.index)}
                  >
                    <div>
                      <H3 className="text-xl font-medium">
                        {section.data.title}
                      </H3>
                      <p className="text-gray-600 text-sm mt-1">
                        {section.data.topic}
                      </p>
                    </div>
                    <div style={{ color: PRIMARY_ORANGE }}>
                      {expandedSections.includes(section.index) ? "−" : "+"}
                    </div>
                  </div>

                  {expandedSections.includes(section.index) && (
                    <div className="border-t border-gray-200">
                      {section.type === "semester" ? (
                        <>
                          {/* Semester content */}
                          <div className="px-4 py-4 bg-gray-50">
                            <p className="text-gray-700">{section.data.text}</p>
                          </div>
                          <div className="px-4 py-4 space-y-4">
                            {section.data.courses.map(
                              (course: Course, idx: number) => (
                                <div
                                  key={idx}
                                  className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-md transition-colors"
                                >
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
                                  <div>
                                    <a
                                      href={course.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:underline"
                                    >
                                      <div className="font-medium text-gray-900">
                                        {course.courseCode}
                                      </div>
                                      <div className="text-gray-600">
                                        {course.title}
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </>
                      ) : (
                        /* External program content */
                        <div className="px-4 py-4 border-t border-gray-200">
                          <p className="text-gray-700 mb-4">
                            {section.data.text}
                          </p>
                          <a
                            href={section.data.url}
                            className="font-medium hover:underline"
                            style={{ color: PRIMARY_ORANGE }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Les mer
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
