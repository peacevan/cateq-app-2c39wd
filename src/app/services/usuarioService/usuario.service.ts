import { Injectable } from '@angular/core';
import { Usuario } from "../../models/usuario.model";


import {
  Firestore,
  getFirestore, collection, doc,
  getDocs, getDoc, addDoc, setDoc, deleteDoc, Timestamp, query, where
} from 'firebase/firestore';
import { FirebaseService } from "../firebaseService/firebase.service"



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private firestoreDB: Firestore;
  private usuarios: Usuario[] = [];

  constructor(private fireServ: FirebaseService) {
    this.firestoreDB = getFirestore(this.fireServ.getApp());
  }

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

  /*public add(user: Usuario): Usuario {
      this.usuarios.push(user); 
      console.log(this.usuarios);
      return user;    
  }*/

  public async add(user: Usuario) {
    //@ts-ignore
    delete user.id;
    const docRef = await addDoc(collection(this.firestoreDB, 'usuarios'), { ...user });
    return docRef;
  }


  public delete(id: string) {
    this.usuarios = this.usuarios.filter((u: Usuario) => u.id !== id);
  }

  public checkLogin(user: Usuario): boolean {
   
    let aceito = false;
    this.getUser(user);
    for (let i = 0; i < this.usuarios.length; i++) {
      const element = this.usuarios[i];
      if (element.login === user.login && element.senha === user.senha) {
        aceito = true;
        break;
      }
    }
    return aceito;
  }

  public async getUser(user: Usuario) {
    const q1 = query(collection(this.firestoreDB, "usuarios"), where("login", "==", user.login), where("senha", "==", user.senha));
    const querySnapshot = await getDocs(q1);
    console.log(querySnapshot);
    var  users : any[] = [];
   
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    this.usuarios= users;
    return users;
  }
}
