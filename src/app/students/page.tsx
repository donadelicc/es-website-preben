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
import { CURRENT_YEARS } from "@app/constants";
import { StudentDialog } from "@app/components/Dialogs/StudentDialog";

export default function Students() {
  const { currentValue: currentYear, onChange: onYearChange } =
    useSelect("2026");

  const { students } = useStudents("current", currentYear);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex my-8 justify-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-11/12">
          <Title className="text-secondary">Our students</Title>
          <div className="mt-2 md:mt-0">
            <div className="mt-2">
              <Select value={currentYear} onValueChange={onYearChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose year" />
                </SelectTrigger>
                <SelectContent>
                  {CURRENT_YEARS.map((year) => (
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
        <div className="w-11/12 flex flex-wrap justify-center gap-6">
          {students.map((student) => (
            <StudentDialog student={student} key={student.name} />
          ))}
        </div>
      </section>
    </main>
  );
}
