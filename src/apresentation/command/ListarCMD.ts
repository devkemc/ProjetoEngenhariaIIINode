import { EntidadeDominio } from "../../core/EntidadeDominio";
import { ICommand } from "./ICommand";

export class ListarCMD implements ICommand {
  execute(entidade: EntidadeDominio): void {}
}
