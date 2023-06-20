import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroAlunoPageRoutingModule } from './alunos-routing.module';
import { alunosPage } from './alunos.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAlunoPageRoutingModule
  ],
 // declarations: [CadastroAlunoPage]
})
export class alunosPageModule {}
