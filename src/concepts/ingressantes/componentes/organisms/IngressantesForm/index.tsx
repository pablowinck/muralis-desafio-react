import React, { useEffect, useMemo, useState } from "react";
import Text from "../../../../../ui/atoms/Label";
import Input from "../../../../../ui/atoms/Input";
import Select from "../../../../../ui/molecules/Select";
import Button from "../../../../../ui/atoms/Button";
import { useCadastraIntegrante } from "../../../hooks/useCadastraIngressante";
import Alert from "../../../../../ui/molecules/Alert";
import { useRouter } from "next/router";

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
  const { mutate, isLoading, isError, isSuccess } = useCadastraIntegrante();
  const router = useRouter();

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
        mutate({
          nome,
          curso: cursos.find((c) => c.id === curso)?.nome || "",
          estado: estados.find((e) => e.id === estado)?.nome || "",
          cidade: cidades.find((c) => c.id === cidade)?.nome || "",
          dataCadastro: new Date().toISOString().split("T")[0],
        });
      }}
    >
      <div className="flex flex-col gap-2">
        <Text className="px-2">Nome</Text>
        <Input
          required
          disabled={isLoading}
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Text className="px-2">Curso</Text>
        <Select
          required
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
          options={cidadesOptions}
          onChange={(e) => setCidade(Number(e.target.value))}
          value={cidade.toString()}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <Button
          className="min-w-[5rem] px-3"
          color="alert"
          type="button"
          onClick={() => router.push("/")}
        >
          Sair
        </Button>
        <Button
          disabled={isLoading}
          className="min-w-[5rem] px-3"
          color="success"
          type="submit"
        >
          {isLoading ? "Gravando..." : "Gravar"}
        </Button>
      </div>
      <Alert
        color="error"
        open={isError}
        message="Ocorreu um erro ao cadastrar o ingressante."
        title="Erro!"
      />
      <Alert
        color="success"
        open={isSuccess}
        message="O ingressante foi cadastrado com sucesso."
        title="Sucesso!"
      />
    </form>
  );
};

export default IngressantesForm;
