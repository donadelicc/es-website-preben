import { StudentSection } from "@app/sections/Students/Students";
import { SolanLinjeforening } from "@app/sections/Students/SolanLinjeforening";
import { useSolanLinjeforening } from "@app/hooks/server/useSolanLinjeforening";

export default async function StudentsPage() {
  const { data: solanData } = await useSolanLinjeforening();

  return (
    <main className="flex min-h-screen flex-col">
      <StudentSection />
      <section className="flex my-2 md:my-8 justify-center">
        {solanData ? (
          <SolanLinjeforening data={solanData} />
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </main>
  );
}
