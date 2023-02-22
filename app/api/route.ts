import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ response: "GET" });
}

export async function HEAD(request: Request) {
  return NextResponse.json({ response: "HEAD" });
}
export async function OPTIONS(request: Request) {
  return NextResponse.json({ response: "OPTIONS" });
}
export async function POST(request: Request) {
  return NextResponse.json({ response: "POST" });
}
export async function PUT(request: Request) {
  return NextResponse.json({ response: "PUT" });
}
export async function DELETE(request: Request) {
  return NextResponse.json({ response: "DELETE" });
}
export async function PATCH(request: Request) {
  return NextResponse.json({ response: "PATCH" });
}
