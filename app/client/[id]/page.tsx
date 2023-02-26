"use client";
import React from "react";
import { ClientComponent } from "@/components/ClientComponent";
import { fetchData } from "@/lib/fetchData";
import { EFetchSide } from "@/components/types";

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    fetchData(window.location.origin + "/api/" + params?.id).then((data) =>
      setData({ ...data })
    );
  }, [params]);

  return (
    <ClientComponent id={params?.id} data={data} side={EFetchSide.client} />
  );
}

export const dynamic = "force-dynamic";
