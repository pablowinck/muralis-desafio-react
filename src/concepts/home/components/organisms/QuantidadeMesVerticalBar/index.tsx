import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundColors } from "../../../../../utils/colors";
import {
  InscritosPorData,
  useFetchInscritosPorData,
} from "../../../hooks/useFetchInscritosPorData";
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="col-span-3 bg-white flex justify-center items-center px-4">
    {children}
  </div>
);

const QuantidadeMesVerticalBar: React.FC = () => {
  const { data, isLoading, isIdle, isError } = useFetchInscritosPorData();

  const cursos = useMemo(() => {
    if (!data) return [];
    return Object.keys(data).reduce((acc, key) => {
      return [...acc, ...Object.keys(data[key])];
    }, [] as string[]);
  }, [data]);

  const chartData = useMemo<ChartData<"bar", number[], string>>(() => {
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

  if (isError) return <Container>Erro ao carregar dados</Container>;

  if (isLoading || isIdle)
    return (
      <Container>
        <Image
          src="/loading.svg"
          height={100}
          width={100}
          alt="loading quantity per month chart"
        />
      </Container>
    );

  return (
    <Container>
      <Bar
        height="160px"
        width="700px"
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top" as const,
            },
            title: {
              color: "black",
              display: true,
              text: "Inscritos",
              align: "start" as const,
              font: {
                size: 18,
              },
            },
          },
        }}
        data={chartData}
      />
    </Container>
  );
};

export default QuantidadeMesVerticalBar;
