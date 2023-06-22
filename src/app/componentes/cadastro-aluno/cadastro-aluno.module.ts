import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroAlunoPageRoutingModule } from './cadastro-aluno-routing.module';
import { CadastroAlunoPage } from './cadastro-aluno.page';
import { environment } from './../../environments/environment';
//import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAlunoPageRoutingModule,
	  ReactiveFormsModule,
	 // AngularFireModule.initializeApp(environment.firebaseConfig),
   // AngularFireStorageModule
	
  ],
 //declarations: [CadastroAlunoPage]
})
export class CadastroAlunoPageModule {}
