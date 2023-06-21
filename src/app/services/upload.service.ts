import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private storage: AngularFireStorage) { }
  uploadImage(imageData: string): Promise<string> {
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.storage.ref(`images/${randomId}`);
    return ref.putString(imageData, 'data_url').then(() => {
      return ref.getDownloadURL().toPromise();
    });
  }

}
