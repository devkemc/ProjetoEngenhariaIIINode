import { EntidadeDominio } from "../core/EntidadeDominio";

export class Estado implements EntidadeDominio {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}
