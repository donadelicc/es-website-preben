import { client } from "@app/config";
import { ProgramStructurePage } from "@app/types";
import ProgramPage from "./ProgramPage";

async function getData() {
  const query = `*[_type == 'programStructure']{
    title,
    intro,
    readMoreLink,
    semesters[]{
      title,
      topic,
      courses[]{
        courseCode,
        title,
        credits,
        url
      }
    },
    bostonInfo{
      title,
      topic,
      text,
      url
    }
  }`;
  const result = await client.fetch<ProgramStructurePage[]>(query);
  console.log('Program Structure Data:', JSON.stringify(result[0], null, 2));
  return result[0];
}

export default async function Program() {
  const content = await getData();

  return (
    <main className="flex min-h-screen flex-col mx-8">
      <ProgramPage program={content} />
    </main>
  );
}