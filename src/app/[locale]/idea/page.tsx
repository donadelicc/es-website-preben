import { HeaderSectionIdea } from "@app/sections";
import { client } from "@app/config";
import { IdeaPage } from "@app/types";
import { Badge, SanityBlock, Title } from "@app/components";

async function getData() {
  const query = `*[ _type == "idea" ]`;
  return client.fetch(query).then((res: IdeaPage[]) => res[0]);
}
export default async function Idea() {
  const content = await getData();

  return (
    <main className="flex min-h-screen flex-col">
      <HeaderSectionIdea title={content.title} image={content.image} />
      <section className="my-4 flex flex-col items-center">
        <div className="w-4/5 md:w-3/5">
          <SanityBlock blocks={content.contentp1} />
        </div>
      </section>
      <section className="my-4 flex flex-col items-center">
        <video controls className="w-4/5 md:w-3/5">
          <source src={content.video} type="video/mp4" />
        </video>
      </section>
      <section className="my-4 flex flex-col items-center">
        <div className="w-4/5 md:w-3/5 ">
          <Title className="text-accent">Commercializations</Title>
          <p className="mt-1 md:mt-2 text-sm">
            Examples of startups that have been commercialized by NTNU School of
            Entrepreneurship:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {content.commercializations.map((item) => (
              <Badge key={item} className="flex justify-center py-2">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      <section className="my-4 flex flex-col items-center">
        <div className="w-4/5 md:w-3/5">
          <SanityBlock blocks={content.contentp2} />
        </div>
      </section>
    </main>
  );
}
