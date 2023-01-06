import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../services/api";

export type TotalInscritosResponse = {
  result: number;
};

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const ingressantes = await api.get("/ingressantes").then((res) => res.data);
  return res.status(200).json({ result: ingressantes.length });
}
