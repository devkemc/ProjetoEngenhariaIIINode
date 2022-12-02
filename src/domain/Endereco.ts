import { EntidadeDominio } from "../core/EntidadeDominio";
import { Cidade } from "./Cidade";
export class Endereco implements EntidadeDominio {
  logradouro: string;
  numero: number;
  bairro: string;
  cep: number;
  cidade: Cidade;

  constructor(
    logradouro: string,
    numero: number,
    bairro: string,
    cep: number,
    cidade: Cidade
  ) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cep = cep;
    this.cidade = cidade;
  }
}
