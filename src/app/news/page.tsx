"use client";

import { useSelect } from "@app/hooks";
import {
  Title,
  Tabs,
  TabsList,
  TabsTrigger,
  StartupDialog,
} from "@app/components";

export default function Startups() {
  const { currentValue, onChange } = useSelect("inhouse");

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex my-8 justify-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-11/12">
          <Title className="text-secondary">Our startups</Title>
          <Tabs
            value={currentValue}
            onValueChange={onChange}
            className="mt-2 md:mt-0"
          >
            <TabsList>
            </TabsList>
          </Tabs>
        </div>
      </section>
      <section className="flex my-2 md:my-8 justify-center">
        <div className="w-11/12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        </div>
      </section>
    </main>
  );
}
