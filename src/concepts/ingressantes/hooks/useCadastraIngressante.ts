import { useMutation } from "react-query";
import { api } from "../../../services/api";

export type IngressanteBody = {
  nome: string;
  curso: string;
  estado: string;
  cidade: string;
  dataCadastro: string;
};

export const useCadastraIntegrante = () => {
  return useMutation((ingressante: IngressanteBody) =>
    api.post("/ingressantes", ingressante)
  );
};
