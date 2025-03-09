import { client } from "@app/config";
import { ProgramStructurePage } from "@app/types";

export async function getData() {
  const query = `*[_type == 'programStructure'][0]{
    title,
    introTitle,
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
    },
    programProgression{
      title,
      section[]{
        title,
        text
      }
    }
  }`;
  
  try {
    const result = await client.fetch<ProgramStructurePage>(
      query,
      {},
      { cache: "no-store" }
    );
    return result;
  } catch (error) {
    console.error('Error fetching program data:', error);
    return null;
  }
}
