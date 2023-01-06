import axios from "axios";
import { ChartData } from "chart.js";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { backgroundColors } from "../../../utils/colors";

export type InscritosPorData = {
  [key: string]: { [key: string]: number };
};

const getSequencialTotalInscritosPorData = (
  values: InscritosPorData,
  curso: string
) => {
  const totalInscritosPorData: number[] = Object.entries(values).map(
    ([_, cursos]) => {
      return cursos[curso] || 0;
    }
  );
  return totalInscritosPorData;
};

export const useFetchInscritosPorData = () => {
  const { data, isLoading, isIdle, isError } = useQuery<InscritosPorData>(
    "inscritosPorData",
    () => axios.get("/api/inscritos-por-data").then((res) => res.data)
  );

  const cursos = useMemo(() => {
    if (!data) return [];
    return Object.keys(data)
      .reduce((acc, key) => {
        return [...acc, ...Object.keys(data[key])];
      }, [] as string[])
      .filter((value, index, self) => self.indexOf(value) === index);
  }, [data]);

  const chartData = useMemo<ChartData<any, number[], string>>(() => {
    if (!data)
      return {
        labels: [],
        datasets: [],
      };
    return {
      labels: Object.keys(data) || [],
      datasets: cursos.map((key, index) => ({
        label: key || "Sem curso",
        data: getSequencialTotalInscritosPorData(data, key) || [],
        backgroundColor: backgroundColors[index] || backgroundColors[0],
      })),
    };
  }, [cursos, data]);

  console.log("cursos", cursos);

  return { data, chartData, isLoading, isIdle, isError };
};
