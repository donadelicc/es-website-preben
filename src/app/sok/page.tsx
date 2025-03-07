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
    <>
      <div className="flex gap-8">
        {/* Add empty div to maintain spacing where sidebar would be */}
        <div className="w-64"></div>
        
        {/* Title aligned with main content */}
        <h1 className="text-5xl font-bold mb-24"
        style={{
          color: '#f97316',
        }}
        >{content.title}</h1>
      </div>

      <div className="flex gap-8">
        <NavigationSidebar />
        
        <main className="flex-1">
          <section className="space-y-12">
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

            <section id="faq" className="my-12">
              <FAQ faqs={content.FAQ} />
            </section>
          </section>
        </main>
      </div>
    </>
  );
}