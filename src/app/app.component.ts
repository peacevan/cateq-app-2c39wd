import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: ' Alunos', url: '/alunos/list', icon: 'warning' },
    { title: 'Turmas', url: '/turmas/list', icon: 'archive' },
    { title: 'Professores', url: '/professores/list', icon: 'paper-plane' },
    //{title: 'Usuarios', url: '/usuarios/list', icon: 'person-add-sharp' },
    //cadastro de usuário vai ficar em registrar na feature autenticação
 
  ];
  public labels = [];
  constructor() {}
}
