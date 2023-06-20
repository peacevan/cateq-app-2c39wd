import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NavbarPage implements OnInit {

  public appPages = [
    { title: 'Registro', url: '/cadastro-usuario', icon: 'user' },
  ];
  public labels = ['Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste'];
  constructor() {}

  ngOnInit() {
  }

}
