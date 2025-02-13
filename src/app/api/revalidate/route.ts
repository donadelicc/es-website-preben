import { revalidatePath } from "next/cache";
import { paths } from "@app/constants";

export async function POST() {
  paths.map((path) => revalidatePath(path));
  return new Response("Successfully revalidated website");
}
