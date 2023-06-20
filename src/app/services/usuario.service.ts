import { Injectable } from '@angular/core';
import { Usuario } from "../models/usuario.model";


@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService{
  private usuarios: Usuario[] = [];
  
  constructor() { }
  
    public getAll(): Usuario[] {
      return this.usuarios;
    }
  
    public get(id: string): Usuario {
        let userRet: Usuario | undefined;
       
        for (let i = 0; i < this.usuarios.length; i++) {
          const element = this.usuarios[i];
          if (element.id === id) {
            userRet = element;
            break;
          }
        }
      
        if (userRet === undefined) {
          throw new Error('User not found');
        }
      
        return userRet;
    }  
  
    public add(user: Usuario): Usuario {
        this.usuarios.push(user); 
        console.log(this.usuarios);
        return user;    
    }

    public delete(id:string){
        this.usuarios = this.usuarios.filter((u: Usuario) => u.id !== id);
    }

    public checkLogin(user: Usuario): Boolean {
        let aceito = false;

        for (let i = 0; i < this.usuarios.length; i++) {
            const element = this.usuarios[i];
            if (element.login === user.login && element.senha === user.senha) {
              aceito = true;
              break;
            }
        }
        return aceito;
    }
  }
  