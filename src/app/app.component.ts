import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: ' Alunos', url: '/alunos/listar', icon: 'warning' },
    { title: 'Turmas', url: '/turmas/listar', icon: 'archive' },
    { title: 'Professores', url: '/professores/listar', icon: 'paper-plane' },
    { title: 'Usuarios', url: '/usuarios/listar', icon: 'person-add-sharp' },
 
  ];
  public labels = [];
  constructor() {}
}
