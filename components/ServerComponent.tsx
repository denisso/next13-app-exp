import { fetchData } from "@/lib/fetchData";

export const ServerComponent = async ({ id }: { id: string }) => {
  const  data  = await fetchData(id);
  return <section>{data}</section>;
};