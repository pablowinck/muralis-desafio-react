import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useFetchPorcentagemCurso } from "../../../hooks/useFetchPorcentagemCurso";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundColors = [
  "rgba(249, 172, 20, 0.8)",
  "rgba(16, 56, 92, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(54, 162, 235, 0.8)",
];

const borderColors = [
  "rgb(249, 172, 20)",
  "rgb(16, 56, 92)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white row-span-2 flex items-center justify-center">
    {children}
  </div>
);

const PorcentagemPorCurso: React.FC = () => {
  const { data, isLoading, isIdle, isError } = useFetchPorcentagemCurso();
  if (isError) return <Container>Erro ao carregar dados</Container>;
  if (isLoading || isIdle)
    return (
      <Container>
        <Image src="/loading.svg" width={100} height={100} alt="loading" />
      </Container>
    );
  return (
    <Container>
      <Doughnut
        data={{
          labels: Object.keys(data),
          datasets: [
            {
              label: "Porcentagem por curso",
              data: Object.values(data),
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "black",
                padding: 10,
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default PorcentagemPorCurso;
