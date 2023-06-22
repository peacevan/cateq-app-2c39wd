import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroAlunoPageRoutingModule } from './professores-routing.module';
import { ProfessoresPage } from './professores.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAlunoPageRoutingModule
  ],
 // declarations: [CadastroAlunoPage]
})
export class ProfessoresPageModule {}
