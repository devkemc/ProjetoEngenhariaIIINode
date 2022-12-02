import { EntidadeDominio } from "../../core/EntidadeDominio";

export interface ICommand {
  execute: (entidade: EntidadeDominio) => void;
}
