"use client";

import { useSelect, useStudents } from "@app/hooks";
import { Tabs, TabsList, TabsTrigger, Title } from "@app/components";
import { CURRENT_YEARS } from "@app/constants";
import { StudentDialog } from "@app/components/Dialogs/StudentDialog";

  import { useState } from "react";

export default function Students() {
  const [currentYear, setCurrentYear] = useState("2026");

  const { students } = useStudents("current", currentYear);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex my-8 justify-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-11/12">
          <Title className="text-secondary">Our Students <span className="text-primary text-3xl">{currentYear}</span></Title>
          
          <div className="mt-2 md:mt-0">
            <div className="mt-2">
              <Tabs
                value={currentYear}
                onValueChange={setCurrentYear}
                className="mt-2 md:mt-0"
              >
                <TabsList>
                  {CURRENT_YEARS.map((year) => (
                    <TabsTrigger key={year} value={year}>
                      {year}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section className="flex my-2 md:my-8 justify-center">
        <div className="w-11/12 flex flex-wrap justify-center gap-6">
          {students.map((student) => (
            <StudentDialog student={student} key={student.name} />
          ))}
        </div>
      </section>
    </main>
  );
}
