import { useSelect } from "@app/hooks";
import {
  Title,
  Tabs,
  TabsList,
  TabsTrigger,
  StartupDialog,
} from "@app/components";
import { client } from "@app/config";

async function getData() {
  const query = `*[_type == "contact"]`;
  //return client.fetch<[]>(query);
}

export default async function News() {

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex my-2 md:my-8 justify-center">
        <div className="w-11/12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {

        }
        </div>
      </section>
    </main>
  );
}
