import { ClientComponent } from "@/components/ClientComponent";
import { fetchData } from "@/lib/fetchData";
import { EFetchSide } from "@/components/types";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchData(
    process?.env?.NEXT_PUBLIC_VERCEL_URL + "/api/" + params.id
  );
  return (
    <ClientComponent id={params.id} data={data} side={EFetchSide.server} />
  );
}

export const dynamic = "force-dynamic";
