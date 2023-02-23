import { ServerComponent } from "@/components/ServerComponent";
import { ClientComponent } from "@/components/ClientComponent";
export default async function Page({ params }: { params: { id: string } }) {
  return (
    <ClientComponent id={params.id}>
      {/* @ts-expect-error Server Component */}
      <ServerComponent id={params.id} />
    </ClientComponent>
  );
}

export const dynamic = "force-dynamic";
