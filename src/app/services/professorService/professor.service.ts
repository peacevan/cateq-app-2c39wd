import { Injectable } from '@angular/core';
import {
    Firestore,
    getFirestore, collection, doc,
    getDocs, getDoc, addDoc, setDoc, deleteDoc, Timestamp
} from 'firebase/firestore';
import { FirebaseService } from '../firebaseService/firebase.service';
import { Professor } from '../../models/professor.model';

@Injectable({
    providedIn: 'root'
})
export class ProfessorService {
    public professores: Professor[] = [];
    private firestoreDB: Firestore;
    constructor(private fireServ: FirebaseService) {
        this.firestoreDB = getFirestore(this.fireServ.getApp());
    }
    public async adicionar(professor: Professor) {
        //@ts-ignore
        delete professor.id;
        const docRef = await addDoc(collection(this.firestoreDB, 'professores'), { ...professor });
        return docRef;
    }
    public async getAll(): Promise<Professor[]> {
        const professoresCol = collection(
        this.firestoreDB, 'professores');

        const professoresSnapshot = await getDocs(professoresCol);
        const professoresList: Professor[] = professoresSnapshot.docs
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
                    }
                }
            );

        return professoresList;
    }

    public async editar(professor: Professor) {
        try {
          // @ts-ignore
          const professoresRef = collection(this.firestoreDB, 'professores' );      
          return await setDoc(doc(professoresRef, professor.id), { ...professor });
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    
      public async obter(id: string){
        this.professores.find((t) => t.id = id);
      }


}
