import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { alunosPage } from './alunos.page';

const routes: Routes = [
  {
    path: '',
    component: alunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAlunoPageRoutingModule {}
