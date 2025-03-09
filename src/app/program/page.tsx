import { client } from "@app/config";
import { ProgramStructurePage } from "@app/types";
import ProgramPage from "./ProgramPage";
import { getData } from "./get_data";

export default async function Program() {
  const content = await getData();
  
  if (!content) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>No program data available</h1>
      </main>
    );
  }
    
  return (
    <main className="flex min-h-screen flex-col mx-8">
      <ProgramPage program={content} />
    </main>
  );
}