import axios from "axios";
import { useQuery } from "react-query";
import { PorcentagemCursoResponse } from "../../../pages/api/porcentagem-curso";

export const useFetchPorcentagemCurso = () => {
  return useQuery<{ [key: string]: string }>("porcentagemCurso", () =>
    axios.get("/api/porcentagem-curso").then((res) => res.data)
  );
};
