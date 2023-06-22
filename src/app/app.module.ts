import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import {MatIconModule} from '@angular/material/icon'; 
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
           ReactiveFormsModule,
           AngularFireModule.initializeApp(environment.firebaseConfig),
           AngularFireStorageModule,
           MatIconModule
          
          ],
  providers: [ NativeStorage,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
