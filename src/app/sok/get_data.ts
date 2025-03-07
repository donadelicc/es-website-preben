import { client } from "@app/config";
import { ApplyPage } from "@app/types";

export async function getData() {
  const query = `*[_type == 'apply'][0]{
    title,
    subsections[]{
      _type,
      _key,
      title,
      content,
      timeline[]{
        date,
        title,
        description
      },
      introText,
      informationBoxes[]{
        title,
        text
      },
      steps[]{
        title,
        text
      },
      outroText[]{
        title,
        text,
        url
      }
    },
    FAQ[]{
      _key,
      title,
      content
    }
  }`;
  return await client.fetch<ApplyPage[]>(query, {}, { cache: "no-store" });
}
