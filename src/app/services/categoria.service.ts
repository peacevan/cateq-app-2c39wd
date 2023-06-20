import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private storage: Storage) { 
    this.storage.create();
  }
  public async adicionar(novaCategoria: Categoria){
    await this.storage.set(novaCategoria.id, novaCategoria);
  }

  public async deletar(id: string){
    await this.storage.remove(id);
  }

  public async editar(categoria: Categoria){
    await this.storage.set(categoria.id,categoria);
  }

  public async obter(id: string){
    return await this.storage.get(id);
  }

  public async carregar(): Promise<Categoria[]> {
    let lista: Array<Categoria> = [];
    await this.storage.forEach((categoria, id, indice)=>{
      lista.push({...categoria})
    });
    
    return lista;
  }

}
