import { AlumniSection } from "@app/sections";
import { client } from "@app/config";
import { AlumniOrganizationPage } from "@app/types";
import AlumniStudents from "./AlumniStudents";

async function getData() {
  const query = `*[ _type == "alumni" ]`;
  return client.fetch<AlumniOrganizationPage[]>(query).then((res) => res[0]);
}

export default async function Alumni() {
  const content = await getData();

  return (
    <main className="flex min-h-screen flex-col">
      <AlumniSection image={content.image} blocks={content.content} />
      <AlumniStudents />
    </main>
  );
}
