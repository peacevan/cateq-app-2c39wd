import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from './../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private app: FirebaseApp;
	key: string;
    name: string;
    url: string;
    file: File;
    constructor(file: File) {
       this.app = initializeApp(environment.firebaseConfig);
	   this.file = file;
    }
    
    public getApp(): FirebaseApp {
        return this.app;
    }
	
	

}