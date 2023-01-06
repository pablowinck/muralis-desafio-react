import { useQuery } from "react-query";
import { api } from "../../../services/api";

export const useFetchUserStats = () => {
  return useQuery<{ nome: string; email: string }>("userStats", () =>
    api.get("/usuario-logado").then((res) => res.data)
  );
};
