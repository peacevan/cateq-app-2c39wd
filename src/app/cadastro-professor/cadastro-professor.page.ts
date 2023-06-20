import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.page.html',
  styleUrls: ['./cadastro-professor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroProfessorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
