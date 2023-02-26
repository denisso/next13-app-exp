import { ClientComponent } from "@/components/ClientComponent";
import { EFetchSide } from "@/components/types";

export default async function Home() {
  return <ClientComponent id="/" side={EFetchSide.server} />;
}
