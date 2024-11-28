"use client";

import { useSelect, useStartups } from "@app/hooks";
import {
  Title,
  Tabs,
  TabsList,
  TabsTrigger,
  StartupDialog,
} from "@app/components";
import { STARTUP_VALUES } from "@app/constants";

export default function Startups() {
  const { currentValue, onChange } = useSelect("inhouse");
  const { startups } = useStartups(currentValue);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex my-8 justify-center">
        <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-between items-center w-11/12">
          <Title className="text-secondary">
            Our startups - <span className="text-primary">{currentValue}</span>
          </Title>
          <Tabs
            value={currentValue}
            onValueChange={onChange}
            className="mt-2 md:mt-0"
          >
            <TabsList>
              {STARTUP_VALUES.map(({ value, label }) => (
                <TabsTrigger key={value} value={value}>
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>
      <section className="flex my-2 md:my-8 justify-center">
        <div className="w-11/12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {startups.map((startup) => (
            <StartupDialog startup={startup} key={startup.name} />
          ))}
        </div>
      </section>
    </main>
  );
}
