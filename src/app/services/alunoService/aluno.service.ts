import { Injectable } from '@angular/core';
import {
  Firestore,
  getFirestore, collection, doc,
  getDocs, getDoc, addDoc, setDoc, deleteDoc, Timestamp
} from 'firebase/firestore';

import { FirebaseService } from '../firebaseService/firebase.service';
import { Aluno } from '../../models/aluno.model';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private firestoreDB: Firestore;


  constructor(private fireServ: FirebaseService) {
   
    this.firestoreDB = getFirestore(this.fireServ.getApp());
  
  }
  public async adicionar(aluno: Aluno) {
    //@ts-ignore
    delete aluno.id;
    const docRef = await addDoc(collection(this.firestoreDB, 'alunos'), { ...aluno });
    return docRef;
  }
  public async getAll(): Promise<Aluno[]> {
    const alunosCol = collection(
      this.firestoreDB, 'alunos');

    const alunosSnapshot = await getDocs(alunosCol);
    const alunosList: Aluno[] = alunosSnapshot.docs
      .map(
        (doc) => {
          const docData = { ...doc.data() };
          console.log(docData);
          return {
            id: doc.id,
            nome: docData['nome'],
            sobrenome: docData['sobrenome'],
            email: docData['email'],
            telefone: docData['telefone'],
            sexo: docData['sexo'],
			fotourl: docData['fotourl']?docData['fotourl']:"https://ionicframework.com/docs/img/demos/avatar.svg",
          }
        }
      );

    return alunosList;
  }
  
}
