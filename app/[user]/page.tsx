import { fetchData } from "@/lib/fetchData";

export default async function Page({ params }: { params: { user: string } }) {
  // const userData = fetchData(params.user);
  console.log("user params", params);
  return <div>{JSON.stringify(params)}</div>;
}
