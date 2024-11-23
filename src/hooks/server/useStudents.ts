"use client";

import { Student } from "@app/types";
import { useEffect, useState } from "react";
import { client } from "@app/config";

const useStudents = (
  currentView: "current" | "alumni",
  currentYear: string,
) => {
  const [students, setStudents] = useState<Student[]>([]);

  const fetchStudents = async (isCurrent: boolean, year: string) => {
    const baseQuery = `
      {
          name,
          description,
          linkedin,
          year,
          current,
          image
      }
    `;

    const query = isCurrent
      ? `*[_type == "student" && current == true && year == $year] ${baseQuery}`
      : `*[_type == "student" && year == $year && (current == false || !defined(current))] ${baseQuery}`;

    const params = { year: Number(year) };
    const data = await client.fetch<Student[]>(query, params);
    setStudents(data);
  };

  useEffect(() => {
    void fetchStudents(currentView === "current", currentYear);
  }, [currentView, currentYear]);

  return { students };
};

export { useStudents };
