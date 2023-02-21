import { fetchData } from "@/lib/fetchData";

export const ServerComponent = async ({ delay }: { delay: number }) => {
  const { data } = await fetchData(delay);
  return <section>{data}</section>;
};
