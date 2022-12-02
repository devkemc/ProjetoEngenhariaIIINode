import { EntidadeDominio } from '../../core/EntidadeDominio';
import { Cliente } from '../../domain/Cliente';
import { Endereco } from '../../domain/Endereco';
import { IViewHelper } from './IViewHelper';
import { Estado } from '../../domain/Estado';
import { Cidade } from '../../domain/Cidade';
export class ClienteViewHelper implements IViewHelper{
     getEntidade(req: Request): EntidadeDominio{

        let nome = "josé";
        let cpf = "66459923515";
        let email = "joaquim2gmail"
        let logradouro = "rua1"
        let numero = 2
        let bairro = "varinhas"
        let cep = 08753330
        let cidade = "mogi"
        let estado = "sao paulo"
        
        let est = new Estado(estado)
        let cid = new Cidade(cidade, est)

        let endereco = new Endereco(logradouro,numero,bairro,cep,cid)

        let cli = new Cliente(nome, cpf, email, endereco)
        return cli
     }
     setView: any
}