import React, { useEffect, useMemo, useState } from "react";
import Text from "../../../../../ui/atoms/Label";
import Input from "../../../../../ui/atoms/Input";
import Select from "../../../../../ui/molecules/Select";
import Button from "../../../../../ui/atoms/Button";

const cursos = [
  { id: 1, nome: "Matemática" },
  { id: 2, nome: "Letras" },
  { id: 3, nome: "Geografia" },
];

const estados = [
  { id: 1, nome: "São Paulo" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Minas Gerais" },
];

const cidades = [
  { id: 1, nome: "Mogi das Cruzes", estado: 1 },
  { id: 2, nome: "Suzano", estado: 1 },
  { id: 3, nome: "Poá", estado: 1 },
  { id: 4, nome: "Angra dos Reis", estado: 2 },
  { id: 5, nome: "Niterói", estado: 2 },
  { id: 6, nome: "Itaboraí", estado: 2 },
  { id: 7, nome: "Belo Horizonte", estado: 3 },
  { id: 8, nome: "Monte Azul", estado: 3 },
  { id: 9, nome: "Muzambinho", estado: 3 },
];

const IngressantesForm: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const [estado, setEstado] = useState<number>(1);
  const [cidade, setCidade] = useState<number>(1);
  const [curso, setCurso] = useState<number>(1);

  const cidadesOptions = useMemo(
    () =>
      cidades
        .filter((cidade) => cidade.estado === estado)
        .map((cidade) => ({ value: cidade.id.toString(), label: cidade.nome })),
    [estado]
  );

  useEffect(() => {
    setCidade(+cidadesOptions[0].value);
  }, [cidadesOptions]);

  return (
    <form
      className="py-2 px-4 flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ nome, curso, estado, cidade });
      }}
    >
      <div className="flex flex-col gap-2">
        <Text className="px-2">Nome</Text>
        <Input
          required
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Text className="px-2">Curso</Text>
        <Select
          required
          options={cursos.map((curso) => ({
            value: curso.id.toString(),
            label: curso.nome,
          }))}
          onChange={(e) => setCurso(Number(e.target.value))}
          value={curso.toString()}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Text className="px-2">Estado</Text>
        <Select
          required
          options={estados.map((estado) => ({
            value: estado.id.toString(),
            label: estado.nome,
          }))}
          onChange={(e) => setEstado(Number(e.target.value))}
          value={estado.toString()}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Text className="px-2">Cidades</Text>
        <Select
          required
          options={cidadesOptions}
          onChange={(e) => setCidade(Number(e.target.value))}
          value={cidade.toString()}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <Button className="w-20" color="alert" type="button">
          Sair
        </Button>
        <Button className="w-20" color="success" type="submit">
          Gravar
        </Button>
      </div>
    </form>
  );
};

export default IngressantesForm;
