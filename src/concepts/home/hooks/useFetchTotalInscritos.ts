import axios from "axios";
import { useQuery } from "react-query";
import { TotalInscritosResponse } from "../../../pages/api/total-inscritos";

export const useFetchTotalInscritos = () => {
  return useQuery<TotalInscritosResponse>("totalInscritos", () =>
    axios.get("/api/total-inscritos").then((res) => res.data)
  );
};
