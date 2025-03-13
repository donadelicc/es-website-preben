import { StudentSection } from "@app/sections/Students/Students";
import { SolanLinjeforening } from "@app/sections/Students/SolanLinjeforening";
import { useSolanLinjeforening } from "@app/hooks/server/useSolanLinjeforening";

export default function StudentsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <StudentDataFetcher />
    </main>
  );
}

// ✅ Move async logic to a separate function
async function StudentDataFetcher() {
  const { data: solanData } = await useSolanLinjeforening();
  
  return (
    <>
      <StudentSection />
      <section className="flex my-2 md:my-8 justify-center">
        {solanData ? <SolanLinjeforening data={solanData} /> : <div>Loading...</div>}
      </section>
    </>
  );
}

