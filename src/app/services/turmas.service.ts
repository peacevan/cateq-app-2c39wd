import { Injectable } from '@angular/core';
import { Firestore, 
  getFirestore, collection, doc, 
  getDocs, getDoc, addDoc, setDoc, deleteDoc, Timestamp
} from 'firebase/firestore';
import { FirebaseService } from './firebase.service';


import { Turma, statusTurma } from '../models/turma.model';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  public turmas: Turma[] = [];
  
  private firestoreDB: Firestore;

  constructor(private fireServ: FirebaseService) {
    this.firestoreDB = getFirestore(this.fireServ.getApp());
  }

  public async getAll(): Promise<Turma[]> {
    const turmasCol = collection(
      this.firestoreDB, 'turmas');

    const turmasSnapshot = await getDocs(turmasCol);
    const turmasList: Turma[] = turmasSnapshot.docs
                          .map(
                              (doc)=>{
                                const docData = {...doc.data()};
                                console.log(docData);
                                return {
                                  id: doc.id,
                                  apelido: docData['apelido'],
                                  descricao: docData['descricao'],
                                  dataInicio: docData['dataInicio'],
                                  dataConclusao: docData['dataConclusao'] ,
                                  dataPrevEncerramento: docData['dataPrevEncerramento'],
                                  dataCadastro: docData['dataCadastro'].toDate(),
                                  responsavel: docData['responsavel'],
                                  status: docData['status']
                                }
                              }
                          );

    return turmasList;
  }

  public async adicionar(turma: Turma) {
    // @ts-ignore
    delete turma.id;
    delete turma.dataConclusao;
    const docRef = await addDoc(collection(this.firestoreDB,'turmas'), { ...turma });

    return docRef;    
  }

  public async deletar(id: string){
    this.turmas = this.turmas.filter((t) => t.id != id);
  }

  public async editar(turma: Turma) {
    try {
      // @ts-ignore
      if(!turma.dataConclusao) delete turma.dataConclusao;
      const turmasRef = collection(this.firestoreDB, 'turmas' );      
      return await setDoc(doc(turmasRef, turma.id), { ...turma });
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async obter(id: string){
    this.turmas.find((t) => t.id = id);
  }

}
