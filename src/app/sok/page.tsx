import { client } from "@app/config";
import { ApplyPage } from "@app/types";
import { SanityBlock } from "@app/components";
import { SubSection } from "./SubSection";
import { FAQSection } from "./FAQSection";
import { NavigationSidebar } from "./NavigationSidebar";

async function getData() {
  const query = `*[_type == 'apply'][0]`;
  return client.fetch<ApplyPage>(query);
}

export default async function Apply() {
  const content = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <NavigationSidebar />
      
      {/* Title Section */}
      <section id="first-step" className="w-full py-12">
        <h1 className="text-4xl font-bold text-center">{content.title}</h1>
      </section>

      {/* Subsections */}
      <section className="w-4/5 md:w-3/5 space-y-12">
        {content.subsections.map((subsection, index) => {
          // Map section IDs based on index
          const sectionId = [
            'application-process',
            'application-content',
            'what-you-need',
          ][index];
          
          return (
            <div key={index} id={sectionId}>
              <SubSection
                title={subsection.title}
                content={subsection.content}
              />
            </div>
          );
        })}
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-4/5 md:w-3/5 my-12">
        <FAQSection faqs={content.FAQ} />
      </section>

      {/* Questions Section */}
      <section id="questions" className="w-4/5 md:w-3/5 mb-12">
        {/* Add your "Noe uklart?" section content here */}
      </section>
    </main>
  );
}