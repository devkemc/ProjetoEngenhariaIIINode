import { EntidadeDominio } from "../../core/EntidadeDominio";
import { ICommand } from "./ICommand";

export class SalvarCMD implements ICommand {
  execute(entidade: EntidadeDominio): void {}
}
