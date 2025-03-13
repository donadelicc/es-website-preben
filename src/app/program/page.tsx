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
    <>
      <div className="flex gap-8 mt-24">
        <main className="flex-1">
          <ProgramPage program={content} />
        </main>
      </div>
    </>
  );
}
