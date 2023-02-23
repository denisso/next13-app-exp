"use client";
import React from "react";
import { ClientComponent } from "@/components/ClientComponent";
import { fetchData } from "@/lib/fetchData";

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    fetchData(params?.id).then((data) => setData(data));
  }, [params]);

  return <ClientComponent id={params?.id}>{data}</ClientComponent>;
}
