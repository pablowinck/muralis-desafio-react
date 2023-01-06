import axios from "axios";
import { useQuery } from "react-query";

export type InscritosPorData = {
  [key: string]: { [key: string]: number };
};

export const useFetchInscritosPorData = () => {
  return useQuery<InscritosPorData>("inscritosPorData", () =>
    axios.get("/api/inscritos-por-data").then((res) => res.data)
  );
};
