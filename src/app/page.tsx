import { client } from "@app/config";
import { HomePage } from "@app/types";
import {
  HeaderSection,
  InformationSection,
  SponsorSection,
  SuccessStoriesSection,
  NewsSection,
  StatisticsSection,
  IdeaSection,
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

      <SponsorSection sponsors={content.partners} />

      <InformationSection sections={content.sections} />

      <SuccessStoriesSection successStories={content.successStories} />

      {/* <NewsSection news={content.news} /> */}

      <StatisticsSection statistics={content.statistics} />

      <IdeaSection content={content} />
    </main>
  );
}
