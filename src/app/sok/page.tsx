import { Intro } from "../../sections/Apply/Intro";
import { Process } from "../../sections/Apply/Process";
import { Content } from "../../sections/Apply/Content";
import { Steps } from "../../sections/Apply/Steps";
import { NavigationSidebar } from "../../sections/Apply/NavigationSidebar";
import { FAQ } from "../../sections/Apply/FAQ";
import { getData } from "./get_data";

export default async function Apply() {
  const content = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <NavigationSidebar />
      
      <section className="w-full py-12">
        <h1 className="text-4xl font-bold text-center">{content.title}</h1>
      </section>

      <section className="w-4/5 md:w-3/5 space-y-12">
        {content.subsections?.map((subsection) => {
          switch (subsection._type) {
            case 'introSection':
              return (
                <div key={subsection._key} id="first-step">
                  <Intro 
                    title={subsection.title || ''} 
                    content={subsection.content || []} 
                  />
                </div>
              );
            case 'processSection':
              return (
                <div key={subsection._key} id="application-process">
                  <Process 
                    title={subsection.title || ''} 
                    timeline={subsection.timeline || []} 
                  />
                </div>
              );
            case 'contentSection':
              return (
                <div key={subsection._key} id="application-content">
                  <Content 
                    title={subsection.title || ''} 
                    introText={subsection.introText || []} 
                    informationBoxes={subsection.informationBoxes || []} 
                  />
                </div>
              );
            case 'stepsSection':
              return (
                <div key={subsection._key} id="how-to-apply">
                  <Steps 
                    title={subsection.title || ''} 
                    steps={subsection.steps || []}
                    outroText={subsection.outroText || []}
                  />
                </div>
              );
            default:
              return null;
          }
        })}
      </section>

      <section id="faq" className="w-4/5 md:w-3/5 my-12">
        <FAQ faqs={content.FAQ} />
      </section>
    </main>
  );
}