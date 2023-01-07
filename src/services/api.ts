import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export type Ingressante = {
  id: number;
  nome: string;
  curso: string;
  estado: string;
  cidade: string;
  dataCadastro: string;
};
