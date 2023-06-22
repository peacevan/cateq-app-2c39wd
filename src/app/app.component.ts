import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: ' Alunos', url: '/alunos/list', icon: 'person-add' },
    { title: 'Turmas', url: '/turmas/list', icon: 'reader' },
    { title: 'Professores', url: '/professores/list', icon: 'person-add' },
    {title: 'Usuarios', url: '/usuarios/list', icon: 'person-add' },
	{ title: 'Login', url: '/login/list', icon: 'key' },
  
  ];
  public labels = [];
  constructor() {}
}
