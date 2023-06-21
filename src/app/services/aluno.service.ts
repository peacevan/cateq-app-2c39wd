import { Injectable } from '@angular/core';
import {
  Firestore,
  getFirestore, collection, doc,
  getDocs, getDoc, addDoc, setDoc, deleteDoc, Timestamp
} from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { Aluno } from '../models/aluno.model';
//import { finalize } from 'rxjs/operators';
//import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private firestoreDB: Firestore;
 // private storage: AngularFireStorage;

  constructor(private fireServ: FirebaseService) {
   //this.storage=storage;
    this.firestoreDB = getFirestore(this.fireServ.getApp());
    //this.firestoreDB = getAngularFireStorage(this.fireServ.getAppFileStorage());
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
  /*
 public async uploadImage(file: any){
  //const file = event.target.files[0];
  const filePath = 'fotos_aluno' + file.name;
  //const fileRef = this.storage.ref(filePath);
  //const task = this.storage.upload(filePath, file);
  const docRef = await addDoc(collection(this.firestoreDB, 'foto_alunos'), { ...file});
  return docRef;

}*/




}
