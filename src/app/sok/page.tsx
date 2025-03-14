import { Intro } from "../../sections/Apply/Intro";
import { Process } from "../../sections/Apply/Process";
import { Content } from "../../sections/Apply/Content";
import { Steps } from "../../sections/Apply/Steps";
import { NavigationSidebar } from "@app/components/NavigationSidebar";
import { FAQ } from "../../sections/Apply/FAQ";
import { getData } from "./get_data";
import { H1 } from "@app/components/Typography";

const applySections = [
  { id: "first-step", title: "Første steg" },
  { id: "application-process", title: "Søknadsprosessen" },
  { id: "application-content", title: "Søknadens innhold" },
  { id: "how-to-apply", title: "Slik søker du" },
  { id: "faq", title: "FAQ" },
];

export default async function Apply() {
  const content = await getData();

  if (!content) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>No application data available</h1>
      </main>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-8 px-4 sm:px-6 md:px-8 mt-12 md:mt-24">
        <div className="w-64 hidden md:block mt-32">
          <NavigationSidebar sections={applySections} />
        </div>

        <main className="flex-1 overflow-hidden">
          <H1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-12 overflow-hidden">
            {content.title}
          </H1>

          <section className="space-y-8 md:space-y-12">
            {content.subsections?.map((subsection) => {
              switch (subsection._type) {
                case "introSection":
                  return (
                    <div key={subsection._key} id="first-step">
                      <Intro
                        title={subsection.title || ""}
                        content={subsection.content || []}
                      />
                    </div>
                  );
                case "processSection":
                  return (
                    <div key={subsection._key} id="application-process">
                      <Process
                        title={subsection.title || ""}
                        timeline={subsection.timeline || []}
                      />
                    </div>
                  );
                case "contentSection":
                  return (
                    <div key={subsection._key} id="application-content">
                      <Content
                        title={subsection.title || ""}
                        introText={subsection.introText || []}
                        informationBoxes={subsection.informationBoxes || []}
                      />
                    </div>
                  );
                case "stepsSection":
                  return (
                    <div key={subsection._key} id="how-to-apply">
                      <Steps
                        title={subsection.title || ""}
                        steps={subsection.steps || []}
                        outroText={subsection.outroText || []}
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })}

            <section id="faq" className="my-8 md:my-12">
              <FAQ faqs={content.FAQ} />
            </section>
          </section>
        </main>
      </div>
    </>
  );
}
