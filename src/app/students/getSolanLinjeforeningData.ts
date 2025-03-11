import { client } from "@app/config";
import { SolanLinjeforeningPage } from "@app/types";

export async function getSolanLinjeforeningData() {
  const query = `*[_type == 'solanLinjeforening'][0]{
    title,
    description,
    solanUrl,
    videoTitle,
    video
  }`;

  try {
    const result = await client.fetch<SolanLinjeforeningPage>(
      query,
      {},
      { cache: "no-store" },
    );
    return result;
  } catch (error) {
    console.error("Error fetching Solan Linjeforening data:", error);
    return null;
  }
}
