import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export type Ingressante = {
  id: number;
  nome: string;
  curso: string;
  estado: string;
  cidade: string;
  dataCadastro: string;
};
