import { client } from "@app/config";
import { ProgramStructurePage } from "@app/types";
import { CernAndBostonPage } from "@app/types";
import ProgramPage from "./ProgramPage";

async function getDataCernAndBoston() {
  const query = `*[ _type == 'cernAndBoston' ]`;
  return client.fetch<CernAndBostonPage[]>(query).then((res) => res[0]);
}

async function getData() {
  const query = `*[ _type == 'programStructure' ]`;
  return client.fetch<ProgramStructurePage[]>(query).then((res) => res[0]);
}

export default async function Program() {
  const content = await getData();
  const cern = await getDataCernAndBoston();

  return (
    <main className="flex min-h-screen flex-col mx-8">
      <ProgramPage program={content} cern={cern} />
    </main>
  );
}
