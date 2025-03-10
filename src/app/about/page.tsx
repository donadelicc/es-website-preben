import { getAboutData, getFacultyMembers } from "./get_data";
import { FacultyMembers, AboutContent } from "@app/sections";

export default async function About() {
  const about = await getAboutData();
  const facultyMembers = await getFacultyMembers();

  if (!about) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>No about data available</h1>
      </main>
    );
  }

  if (!facultyMembers) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>No faculty members available</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col pb-32">
      <AboutContent about={about} />
      <FacultyMembers facultyMembers={facultyMembers} />
    </main>
  );
}
