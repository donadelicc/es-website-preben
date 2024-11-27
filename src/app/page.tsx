import { client } from "@app/config";
import { HomePage, Notification } from "@app/types";
import {
  Button,
  H2,
  InstagramView,
  SanityBlock,
  Title,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@app/components";
import { HeaderSectionHome } from "@app/sections";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

async function getHomeData() {
  const query = `*[ _type == "home" ]`;
  return client.fetch<HomePage[]>(query).then((res: HomePage[]) => res[0]);
}

async function getNotifications() {
  const query = `*[ _type == 'notifications' ]`;
  return client.fetch<Notification[]>(query).then((res) => res);
}

export default async function Home() {
  const content = await getHomeData();
  const notifications = await getNotifications();

  return (
    <main className="flex min-h-screen flex-col">
      <HeaderSectionHome
        title={content.title}
        description={content.description}
        image={content.image}
      />
      <section className="my-4 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-10/12 md:w-3/5">
          {notifications.map((notification) => (
            <Card
              key={notification.title}
              className="bg-accent text-accent-foreground relative pb-8"
            >
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>{notification.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <SanityBlock blocks={notification.content} />
              </CardContent>
              <Button
                variant="outline"
                className="absolute bottom-2 right-2"
                asChild
              >
                <Link href={notification.link}>
                  Gå til event
                  <IconExternalLink size={18} className="ml-2" stroke={1} />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>
      <section className="my-4 flex flex-col items-center">
        <div className="w-10/12 md:w-1/2 text-center text-accent">
          <Title>{content.quote.quote}</Title>
          <H2 className="mt-2 text-accent">{content.quote.author}</H2>
        </div>
      </section>
      <section className="my-4 flex flex-col items-center">
        <video
          controls
          className="w-4/5 md:w-3/5 aspect-video"
          poster="/NSE.png"
        >
          <source src={content.video} type="video/mp4" />
        </video>
      </section>
      <section className="my-4 flex md:flex-row justify-center items-center flex-col">
        <InstagramView urls={content.some} />
      </section>
    </main>
  );
}
