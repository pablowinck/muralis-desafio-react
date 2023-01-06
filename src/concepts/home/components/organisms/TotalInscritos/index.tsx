import React from "react";
import { useFetchTotalInscritos } from "../../../hooks/useFetchTotalInscritos";

const TotalInscritos: React.FC = () => {
  const { data } = useFetchTotalInscritos();
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-white p-4">
      <div className="text-lg">Total de Inscritos</div>
      <div className="text-4xl font-bold w-full text-center">
        {data?.result || "..."}
      </div>
    </div>
  );
};

export default TotalInscritos;
