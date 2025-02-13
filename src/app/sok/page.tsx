import { client } from "@app/config";
import { ApplyPage } from "@app/types";
import {
  Button,
  SanityBlock,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@app/components";
import { HeaderSectionApply, SocialSectionApply } from "@app/sections";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'apply']`;

  return client.fetch<ApplyPage[]>(query).then((res) => res[0]);
}

export default async function Apply() {
  const content = await getData();

  return (
    <main className="flex min-h-screen flex-col">
      <HeaderSectionApply title={content.title} image={content.image} />
      <section className="my-4 flex flex-col items-center md:hidden ">
        <video controls className="w-4/5">
          <source src={content.video_mobile} type="video/mp4" />
        </video>
      </section>
      <section className="my-4 flex flex-col items-center">
        <div className="w-4/5 md:w-3/5">
          <SanityBlock blocks={content.content} />
        </div>
      </section>
      <section className="my-4 flex flex-col items-center">
        <SocialSectionApply />
      </section>
      {content.information !== undefined && (
        <section className="my-4 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-10/12 md:w-3/5">
            {content.information.map((info, index, array) => (
              <Card
                key={index}
                className={`bg-accent text-accent-foreground relative ${array.length > 1 ? "" : "col-span-2"}`}
                style={{
                  paddingBottom: info.link ? "2rem" : 0,
                }}
              >
                <CardHeader className="flex flex-row justify-between items-center">
                  <CardTitle>{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                      <p className="font-medium">Hvor:</p>
                      <p className="ml-2">{info.location}</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <p className="font-medium">Når:</p>
                      <p className="ml-2">
                        {new Date(info.date).toLocaleDateString("no-NO", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </p>
                    </div>
                    <p className="mt-2 hidden md:block">{info.description}</p>
                  </div>
                </CardContent>
                {info.link && (
                  <Button
                    variant="outline"
                    className="absolute bottom-2 right-2"
                    asChild
                  >
                    <Link href={info.link}>
                      Gå til event
                      <IconExternalLink size={18} className="ml-2" stroke={1} />
                    </Link>
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
