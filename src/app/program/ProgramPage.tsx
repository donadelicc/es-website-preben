"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, H2, SanityBlock, Tabs, TabsContent, TabsList, TabsTrigger, Title } from "@app/components";
import { BostonSection, CernSection } from "@app/sections";
import { CernAndBostonPage, ProgramStructurePage } from "@app/types";
import Link from "next/link";
import { useState } from "react";

export default function ProgramPage({program, cern}: {program: ProgramStructurePage, cern: CernAndBostonPage}){
  const [activeTab, setActiveTab] = useState('tab1');

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
                  Project that fails is a good fundament to start a new one, with
                  new knowledge
                </li>
              </ul>
            </div>
          </section>
          <section className="my-4 md:flex flex-col items-center hidden">
            <div className="w-full md:w-4/5 text-center text-accent">
              <Title>{`"${program.quote.quote}"`}</Title>
              <H2 className="mt-2 text-accent">{program.quote.author}</H2>
            </div>
          </section>
          <section className="my-4 flex flex-col items-center">
            <Accordion type="single" collapsible className="max-w-[640px]">
              {program.semesters.map((semester) => (
                <AccordionItem value={semester.title} key={semester.title}>
                  <AccordionTrigger>
                    <div className="flex flex-row justify-between w-full">
                      <span className="flex items-center font-bold text-left text-sm min-w-28">
                        {semester.title}
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-0 justify-end mr-2">
                        {semester.courses.map((course) => (
                          <Button
                            key={course.title}
                            className="text-xs h-auto p-0.5 px-1.5"
                            size="sm"
                            variant={course.url ? "default" : "ghost"}
                            disabled={!course.url}
                          >
                            {course.url ? (
                              <span className="w-32 truncate">
                                {course.title}
                              </span>
                            ) : (
                              <span className="w-12">+1</span>
                            )}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex gap-2 justify-end items-center flex-wrap">
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
          <BostonSection
            blocks={cern.bostonContent}
            image={cern.bostonImage}
          />
        </>
      </TabsContent>
    </Tabs>
  );
}