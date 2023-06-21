import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto ={ filepath:'', webviewPath:"https://ionicframework.com/docs/img/demos/avatar.svg" };
  constructor() { }
  
  public async addNewToGallery() {
  // Take a photo
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });
   this.photos.filepath= "soon...";
   this.photos.webviewPath=capturedPhoto.webPath;
  
  /* this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturedPhoto.webPath
  });*/
    // Here you get the image as result.
   return capturedPhoto.dataUrl;
   const theActualPicture = capturedPhoto.dataUrl;
 }

 async takePicture() {
  const image = await Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
  });

  // Here you get the image as result.
  const theActualPicture = image.dataUrl;
}
}

export interface UserPhoto {
  filepath: string;
  webviewPath?:string;
}
