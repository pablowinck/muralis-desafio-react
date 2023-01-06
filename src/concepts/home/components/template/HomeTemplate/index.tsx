import React from "react";
import PorcentagemPorCurso from "../../organisms/PorcentagemPorCurso";
import QuantidadeMesVerticalBar from "../../organisms/QuantidadeMesVerticalBar";
import TotalInscritos from "../../organisms/TotalInscritos";

const HomeTemplate: React.FC = () => {
  return (
    <div className="px-8 py-4 flex flex-col w-full h-full gap-4">
      <h1 className="text-4xl font-bold col-span-4">CONTROLE GERAL</h1>
      <div className=" h-full w-full lg:w-9/12">
        <div className="grid grid-cols-4 grid-rows-3 gap-8 overflow-auto h-full drop-shadow-3xl">
          <div className="bg-blue-700" />
          <div className="bg-blue-700" />
          <div className="bg-blue-700" />
          <TotalInscritos />
          <QuantidadeMesVerticalBar />
          <PorcentagemPorCurso />
          <div className="bg-[red] col-span-3">5</div>
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
