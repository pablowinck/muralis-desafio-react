import React from "react";

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
const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const QuantidadeMesMultiaxis: React.FC = () => {
  const { chartData } = useFetchInscritosPorData();
  if (!chartData) return <div>Carregando...</div>;
  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets.map((dataset) => {
      return {
        ...dataset,
        fill: true,
      };
    }),
  };
  return (
    <div className="col-span-3 bg-white p-4">
      <Line
        height="160px"
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
    </div>
  );
};

export default QuantidadeMesMultiaxis;
