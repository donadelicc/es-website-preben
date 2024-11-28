"use client";

import { useSelect, useStudents } from "@app/hooks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Title,
} from "@app/components";
import { ALUMNI_YEARS } from "@app/constants";
import { StudentDialog } from "@app/components/Dialogs/StudentDialog";

export default function AlumniStudents() {
  const { currentValue: currentYear, onChange: onYearChange } =
    useSelect("2024");

  const { students } = useStudents("alumni", currentYear);
  return (
    <>
      <section className="flex my-8 justify-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-11/12">
          <Title className="text-secondary">
            Our alumni{" "}
            <span className="text-primary text-3xl">{currentYear}</span>
          </Title>
          <div className="mt-2 md:mt-0">
            <div className="mt-2">
              <Select value={currentYear} onValueChange={onYearChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose year" />
                </SelectTrigger>
                <SelectContent align="center">
                  {ALUMNI_YEARS.map((year) => (
                    <SelectItem value={year} key={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      <section className="flex my-2 md:my-8 justify-center">
        {/*todo : make flex, and make more responsive */}
        <div className="w-11/12 flex flex-wrap justify-center gap-6">
          {students.map((student) => (
            <StudentDialog student={student} key={student.name} />
          ))}
        </div>
      </section>
    </>
  );
}
