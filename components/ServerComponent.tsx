import { fetchData } from "@/lib/fetchData";
import { ClientComponent } from "./ClientComponent";

export const ServerComponent = async ({ userId }: { userId: string }) => {
  const  data  = await fetchData(userId);

  return <ClientComponent data={data} id={userId}></ClientComponent>;
};
