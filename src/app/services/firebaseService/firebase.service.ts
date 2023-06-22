import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from './../../../environments/environment';
//import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private app: FirebaseApp;
   
	
	constructor() {
        this.app = initializeApp(environment.firebaseConfig);
       // this.appStorage = AngularFireStorage.initializeApp(environment.firebaseConfig);
	  
    }
    
    public getApp(): FirebaseApp {
        return this.app;
    }

    
	

}