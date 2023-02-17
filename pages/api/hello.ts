// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "@/data";

type Data = {
  value: string;
};

interface INextApiRequestEndpoint extends NextApiRequest {
  query: {
    get: string;
    value: string;
  };
}

export default function handler(
  req: INextApiRequestEndpoint,
  res: NextApiResponse<Data>
) {
  if (req.query.get) {
    if (typeof data.value !== "string") {
      data.value = "";
    }
    return res.status(200).json({ value: data.value });
  }

  if (typeof req.query.value !== "string") {
    return res.status(200).json({ value: "req.query.value not string" });
  }

  data.value = req.query.value;
  res.status(200).json({ value: data.value });
}
