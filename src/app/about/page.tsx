import { client } from "@app/config";
import { AboutPage } from "@app/types";
import { H2, SanityBlock, Title } from "@app/components";
import { HeaderSectionAbout } from "@app/sections";

async function getData() {
  const query = `*[ _type == "about" ]`;
  return client.fetch(query).then((res: AboutPage[]) => res[0]);
}

export default async function About() {
  const content = await getData();

  return (
    <main className="flex min-h-screen flex-col pb-32">
      <HeaderSectionAbout
        title={content.title}
        description={content.description}
        image={content.image}
      />
      <section className="my-4 flex flex-col items-center">
        <div className="w-10/12 md:w-1/2 text-center text-accent">
          <Title>{content.quote.quote}</Title>
          <H2 className="mt-2 text-accent">{content.quote.author}</H2>
        </div>
      </section>
      <section className="my-4 flex flex-col items-center">
        <div className="w-4/5 md:w-3/5">
          <SanityBlock blocks={content.content_p1} />
        </div>
      </section>
      <section className="my-4 flex flex-col items-center">
        <video controls className="w-4/5 md:w-3/5">
          <source src={content.video} type="video/mp4" />
        </video>
      </section>
      <section className="my-4 flex flex-col items-center">
        <div className="w-4/5 md:w-3/5">
          <SanityBlock blocks={content.content_p2} />
        </div>
      </section>
    </main>
  );
}
