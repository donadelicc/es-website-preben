"use client";

import { useColors } from "@app/context/ColorContext";
import { AboutPage, FacultyMember } from "@app/types";
import { AboutContent, FacultyMembers } from "@app/sections";
import { useEffect } from "react";

interface AboutWrapperProps {
  about: AboutPage;
  facultyMembers: FacultyMember[];
}

export const AboutWrapper = ({ about, facultyMembers }: AboutWrapperProps) => {
  const { setColors } = useColors();

  useEffect(() => {
    setColors({
      navbarColor: "bg-white",
      footerColor: "bg-[#FFF5E6]",
    });

    return () => {
      setColors({
        navbarColor: "bg-white",
        footerColor: "bg-[#FFF5E6]",
      });
    };
  }, [setColors]);

  return (
    <main className="flex flex-col -mt-[1px] min-h-screen">
      <AboutContent about={about} />
      <FacultyMembers facultyMembers={facultyMembers} />
    </main>
  );
};
