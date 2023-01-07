import { NextApiRequest, NextApiResponse } from "next";
import { Ingressante, api } from "../../services/api";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const ingressantes = await api
    .get<Ingressante[]>("/ingressantes?_sort=dataCadastro")
    .then((res) => res.data);

  const totalPorMes = ingressantes.reduce((acc, ingressante) => {
    const mes = ingressante.dataCadastro.split("-")[1];
    const ano = ingressante.dataCadastro.split("-")[0];
    const key = `${mes}/${ano}`;
    if (acc[key]) {
      if (acc[key][ingressante.curso]) {
        acc[key][ingressante.curso] += 1;
      } else {
        acc[key][ingressante.curso] = 1;
      }
    } else {
      acc[key] = { [ingressante.curso]: 1 };
    }
    return acc;
  }, {} as Record<string, Record<string, number>>);

  return res.status(200).json(totalPorMes);
}
