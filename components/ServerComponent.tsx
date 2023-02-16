import { fetchData } from "@/lib/fetchData";

export const ServerComponent = async ({ page }: { page: string }) => {
  const {data} = await fetchData(page)
  return <>{data}</>
}