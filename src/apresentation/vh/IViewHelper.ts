import { EntidadeDominio } from '../../core/EntidadeDominio';
export interface IViewHelper {
    getEntidade: (req:Request)=>EntidadeDominio;
    setView: ()=>void
}