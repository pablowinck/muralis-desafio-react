import React from "react";
import { useFetchUserStats } from "../../../hooks/useFetchUserStats";
import Label from "../../atoms/Label";
import LabelLoading from "../../atoms/LabelLoading";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full flex flex-col gap-2 text-white items-center">
    {children}
  </div>
);

const UserStats: React.FC = () => {
  const { data, isLoading, isIdle, isError } = useFetchUserStats();
  if (isError)
    return (
      <Container>
        <Label>Erro ao carregar dados</Label>
      </Container>
    );
  if (isLoading || isIdle)
    return (
      <Container>
        <LabelLoading />
        <LabelLoading />
      </Container>
    );
  return (
    <Container>
      <Label>{data.nome}</Label>
      <Label>{data.email}</Label>
    </Container>
  );
};

export default UserStats;
