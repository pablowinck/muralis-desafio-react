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

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="col-span-3 bg-white flex justify-center items-center px-4">
    {children}
  </div>
);

const QuantidadeMesVerticalBar: React.FC = () => {
  const { chartData, isLoading, isIdle, isError } = useFetchInscritosPorData();

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
