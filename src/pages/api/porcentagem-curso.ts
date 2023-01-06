import { NextApiRequest, NextApiResponse } from "next";

import { Ingressante, api } from "../../services/api";

export type PorcentagemCursoResponse = Record<string, string>;

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const ingressantes = await api
    .get<Ingressante[]>("/ingressantes")
    .then((res) => {
      return res.data.map((ingressante) => {
        if (ingressante.curso.length <= 20) return ingressante;
        return {
          ...ingressante,
          curso: ingressante.curso.substring(0, 20) + "...",
        };
      });
    });

  const totalPorCurso = ingressantes.reduce((acc, ingressante) => {
    if (acc[ingressante.curso]) {
      acc[ingressante.curso] += 1;
    } else {
      acc[ingressante.curso] = 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const porcentagemPorCurso = Object.entries(totalPorCurso).reduce(
    (acc, [curso, total]) => {
      acc[curso] = ((total / ingressantes.length) * 100).toFixed(2);
      return acc;
    },
    {} as Record<string, string>
  );

  return res.status(200).json(porcentagemPorCurso);
}
