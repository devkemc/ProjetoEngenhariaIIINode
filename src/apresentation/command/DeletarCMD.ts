import { EntidadeDominio } from "../../core/EntidadeDominio";
import { ICommand } from "./ICommand";

export class DeletarCMD implements ICommand {
  execute(entidade: EntidadeDominio): void {}
}
