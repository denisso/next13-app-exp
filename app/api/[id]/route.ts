import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  let payload = Date.now();
  if (params.id === "gettimezoneoffset")
    payload = new Date().getTimezoneOffset();
  return NextResponse.json({ id: params.id, payload });
}

export const dynamic = "force-dynamic";
