import { ServerComponent } from "@/components/ServerComponent";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ServerComponent userId={params.id} />
    </>
  );
}

export const dynamic = "force-dynamic";
