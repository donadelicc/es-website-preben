"use client"; // ✅ Mark this as a Client Component

import { useEffect, useState } from "react";
import { StudentSection } from "@app/sections/Students/Students";
import { SolanLinjeforening } from "@app/sections/Students/SolanLinjeforening";
import { useSolanLinjeforening } from "@app/hooks/server/useSolanLinjeforening";
import { SolanLinjeforeningPage } from "@app/types";

function StudentDataFetcher() {
  const [solanData, setSolanData] = useState<SolanLinjeforeningPage | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const solanDataPromise = useSolanLinjeforening();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await solanDataPromise;
        setSolanData(result.data);
      } catch (error) {
        console.error("Error fetching Solan data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [solanDataPromise]);

  return (
    <>
      <StudentSection />
      <section className="flex my-2 md:my-8 justify-center">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          solanData && <SolanLinjeforening data={solanData} />
        )}
      </section>
    </>
  );
}

export default function StudentsPage() {
  return (
    <main className="flex min-h-screen flex-col mt-24">
      <StudentDataFetcher />
    </main>
  );
}
