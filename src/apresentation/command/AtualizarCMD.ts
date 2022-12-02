import { EntidadeDominio } from "../../core/EntidadeDominio";
import { ICommand } from "./ICommand";

export class AtualizarCMD implements ICommand {
  execute(entidade: EntidadeDominio): void {}
}
