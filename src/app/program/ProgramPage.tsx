"use client";
import React from "react";
import { ProgramStructurePage } from "@app/types";

interface ProgramPageProps {
  program: ProgramStructurePage;
}

export default function ProgramPage({ program }: ProgramPageProps) {
  return (
    <main className="flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">{program.title}</h1>
      <div className="flex justify-center gap-4 flex-nowrap w-full">
        {program.semesters.map((semester, index) => (
          <React.Fragment key={index}>
            <div className="bg-white p-4 shadow-md rounded-lg w-full md:w-1/5">
              <h2 className="text-xl font-bold mb-6 bg-orange-500 text-white py-1 rounded">
                {semester.title}
              </h2>
              <p className="text-gray-700 mb-4">{semester.topic}</p>
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
              <div className="bg-orange-500 text-white p-4 shadow-md rounded-lg w-full md:w-1/5">
                <h2 className="text-xl font-bold mb-6">Boston</h2>
                <p className="text-gray-700 mb-4">{program.bostonInfo.topic}</p>
                <p className="mb-2">{program.bostonInfo.text}</p>
                <a
                  href={program.bostonInfo.url}
                  className="underline font-bold"
                >
                  Les mer
                </a>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <a
        href={program.readMoreLink}
        className="mt-8 text-lg font-bold text-orange-500 hover:underline"
      >
        Les mer
      </a>
    </main>
  );
}
