import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useFetchPorcentagemCurso } from "../../../hooks/useFetchPorcentagemCurso";
import Image from "next/image";
import { backgroundColors, borderColors } from "../../../../../utils/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

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
          responsive: true,
          borderColor: "black",
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "black",
                padding: 10,
              },
            },
          },
          hover: {
            mode: "index",
          },
        }}
      />
    </Container>
  );
};

export default PorcentagemPorCurso;
