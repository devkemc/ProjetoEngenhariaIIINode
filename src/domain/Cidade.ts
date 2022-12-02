import { EntidadeDominio } from "../core/EntidadeDominio";
import { Estado } from "./Estado";
export class Cidade implements EntidadeDominio {
  nome: string;
  estado: Estado;

  constructor(nome: string, estado: Estado) {
    this.nome = nome;
    this.estado = estado;
  }
}
