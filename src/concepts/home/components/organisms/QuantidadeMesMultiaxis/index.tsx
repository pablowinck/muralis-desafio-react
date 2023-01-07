import React, { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useFetchInscritosPorData } from "../../../hooks/useFetchInscritosPorData";
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="col-span-3 bg-white p-4 flex items-center justify-center">
    {children}
  </div>
);

const QuantidadeMesMultiaxis: React.FC = () => {
  const { chartData, isLoading, isIdle, isError } = useFetchInscritosPorData();

  const data = useMemo(
    () => ({
      labels: chartData.labels,
      datasets: chartData.datasets.map((dataset) => {
        return {
          ...dataset,
          fill: true,
        };
      }),
    }),
    [chartData.datasets, chartData.labels]
  );

  if (isError) return <Container>Erro ao carregar dados</Container>;

  if (isLoading || isIdle)
    return (
      <Container>
        <Image
          src="/loading.svg"
          height={100}
          width={100}
          alt="carregando por mes multiaxis"
        />
      </Container>
    );

  return (
    <Container>
      <Line
        height="130px"
        width="700px"
        data={data}
        options={{
          elements: {
            line: {
              tension: 0.43,
            },
            arc: {
              backgroundColor: "red",
            },
          },
        }}
      />
    </Container>
  );
};

export default QuantidadeMesMultiaxis;
