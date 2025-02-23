import { client } from "@app/config";
import { NextResponse } from "next/server";


export async function GET() {
  const query = `*[ _type == "home" ]`;
  console.log(query);
  const data = await client.fetch(query);
  return NextResponse.json(data);
}


