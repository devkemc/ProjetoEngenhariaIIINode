import { EntidadeDominio } from "../core/EntidadeDominio";
import { Endereco } from "./Endereco";
import { v4 as uuidv4 } from "uuid";

export class Cliente implements EntidadeDominio {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  endereco: Endereco;

  constructor(nome: string, cpf: string, email: string, endereco: Endereco) {
    this.id = uuidv4();
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.endereco = endereco;
  }
}
