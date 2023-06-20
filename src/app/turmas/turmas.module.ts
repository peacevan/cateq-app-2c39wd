import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroAlunoPageRoutingModule } from './turmas-routing.module';
import { TurmasPage } from './turmas.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAlunoPageRoutingModule
  ],
 // declarations: [CadastroAlunoPage]
})
export class TurmasPageModule {}
