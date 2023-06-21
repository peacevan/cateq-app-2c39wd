import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  {
    path: 'alunos/:id',
    loadChildren: () => import('./alunos/alunos.module').then( m => m.alunosPageModule)
      
  },
  {
    path: 'professores/:id',
    loadChildren: () => import('./professores/professores.module').then( m => m.ProfessoresPageModule)
  },

{
path: 'turmas/:id',
loadChildren: () => import('./turmas/turmas.module').then( m => m.TurmasPageModule)
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
