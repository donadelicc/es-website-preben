import { client } from "@app/config";
import { HomePage } from "@app/types";
import { Button, H2, Title } from "@app/components";
import {
  HeaderSection,
  InformationSection,
  SponsorSection,
  SuccessStoriesSection,
  NewsSection,
  StatisticsSection,
} from "@app/sections";

async function getHomeData() {
  const query = `*[_type == "home"]`;
  return client
    .fetch<HomePage[]>(query, {}, { cache: "no-store" })
    .then((res: HomePage[]) => res[0]);
}

export default async function Home() {
  const content = await getHomeData();

  return (
    <main className="flex min-h-screen flex-col">
      {/* ✅ Updated Header Section with CTA */}
      <HeaderSection
        title={content.title}
        description={content.description}
        image={content.image}
        cta={content.cta}
      />

      {/* ✅ Sponsor Section (New) */}
      <SponsorSection sponsors={content.partners} />

      {/* ✅ Information Section (New) */}
      <InformationSection sections={content.sections} />

      {/* ✅ Success Stories */}
      <SuccessStoriesSection successStories={content.successStories} />

      {/* ✅ News Section */}
      <NewsSection news={content.news} />

      {/* ✅ Statistics */}
      <StatisticsSection statistics={content.statistics} />

      {/* ✅ Contact Form */}
      <section className="my-6 w-10/12 md:w-3/5 mx-auto">
        <Title>{content.contact.title}</Title>
        <H2 className="mt-2">{content.contact.description}</H2>
        <form className="flex flex-col mt-4">
          {content.contact.formFields.map((field, index) => (
            <input
              key={index}
              placeholder={field}
              className="p-2 border border-gray-300 rounded mt-2"
            />
          ))}
          <Button type="submit" className="mt-4">
            {content.contact.submitText}
          </Button>
        </form>
      </section>
    </main>
  );
}
