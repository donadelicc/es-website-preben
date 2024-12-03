"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  H2,
  SanityBlock,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Title,
} from "@app/components";
import { Link } from "@app/i18n/routing";
import { cn } from "@app/lib";
import { BostonSection, CernSection } from "@app/sections";
import { CernAndBostonPage, ProgramStructurePage } from "@app/types";
import { useState } from "react";

export default function ProgramPage({
  program,
  cern,
}: {
  program: ProgramStructurePage;
  cern: CernAndBostonPage;
}) {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <div className="flex flex-col gap-2 mb-8 md:flex-row justify-center md:justify-between items-center">
        <Title className="text-secondary">Program</Title>
        <TabsList>
          <TabsTrigger value="tab1">NTNU</TabsTrigger>
          <TabsTrigger value="tab2">Cern & Boston</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="tab1">
        <>
          <section className="flex flex-col gap-4 md:flex-row">
            <SanityBlock blocks={program.content} />
            <div className="px-6 py-4 bg-primary rounded-xl text-tertiary-foreground min-w-80 ">
              <H2 className="text-center">Our values</H2>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Interdisciplinarity</li>
                <li>Honest and clear feedback</li>
                <li>Transparency and sharing of knowledge</li>
                <li>Celebration of successes</li>
                <li>Encouragement of difficulties</li>
                <li>Personal development through accountability</li>
                <li>
                  Learning in combination of high theoretical standards and
                  practices
                </li>
                <li>
                  Project that fails is a good fundament to start a new one,
                  with new knowledge
                </li>
              </ul>
            </div>
          </section>
          <section className="my-4 md:flex flex-col items-center hidden">
            <div className="w-full md:w-4/5 text-center text-accent my-8 max-w-[640px]">
              <Title className="text-lg md:text-xl xl:text-2xl">{`"${program.quote.quote}"`}</Title>
              <H2 className="mt-2 text-accent text-lg">
                {program.quote.author}
              </H2>
            </div>
          </section>
          <section className="my-4 flex flex-col items-center">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col flex-grow w-full min-w-0 max-w-[640px]"
            >
              {program.semesters.map((semester) => (
                <AccordionItem value={semester.title} key={semester.title}>
                  <AccordionTrigger>
                    <div className="flex flex-row justify-between w-full">
                      <span className="flex items-center font-bold text-left text-md min-w-32">
                        {semester.title}
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-0 justify-end mr-2">
                        {semester.courses.map((course) => (
                          <div
                            key={course.title}
                            className={cn(
                              "text-xs rounded-md h-6 px-1.5 bg-primary inline-flex items-center justify-center",
                              course.url
                                ? "bg-primary text-primary-foreground w-32 "
                                : "bg-accent text-accent-foreground w-12",
                            )}
                          >
                            <span className="truncate max-w-full">
                              {course.url ? course.title : "+1"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex gap-2 justify-end items-center flex-wrap max-w-[640px]">
                      <SanityBlock blocks={semester.description} />
                      {semester.courses.map((course) => (
                        <Button
                          key={course.title}
                          className="py-2 h-auto"
                          size="sm"
                          variant={course.url ? "default" : "ghost"}
                          disabled={!course.url}
                        >
                          <Link
                            href={course.url ?? ""}
                            target={course.url ? "_blank" : "_self"}
                            className="text-wrap"
                          >
                            {course.title}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </>
      </TabsContent>
      <TabsContent value="tab2">
        <>
          <CernSection blocks={cern.cernContent} image={cern.cernImage} />
          <section className="my-4 flex flex-row justify-between items-center"></section>
          <section className="my-4 flex flex-col items-center">
            <video controls className="w-11/12 md:w-4/5">
              <source src={cern.video} type="video/mp4" />
            </video>
          </section>
          <BostonSection blocks={cern.bostonContent} image={cern.bostonImage} />
        </>
      </TabsContent>
    </Tabs>
  );
}
