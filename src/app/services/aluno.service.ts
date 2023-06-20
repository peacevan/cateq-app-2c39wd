import { Injectable } from '@angular/core';
import { Firestore, 
  getFirestore, collection, doc, 
  getDocs, getDoc, addDoc, setDoc, deleteDoc, Timestamp
} from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { Aluno } from '../models/aluno.model';

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

    const docRef = await addDoc(collection(this.firestoreDB,'alunos'), { ...aluno });

    return docRef;
  }

}
