import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { Professor } from '../models/professor.model';

import { ProfessorService } from '../services/professor.service';
import { CadastroProfessorPage } from '../cadastro-professor/cadastro-professor.page';
@Component({
  selector: 'professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfessoresPage implements OnInit {
  public listaProfessores: Professor[] = [];

  constructor(
    private professoresServ: ProfessorService, 
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.listarProfessores();
  }

  public listarProfessores() {
    this.professoresServ.getAll().then((professores) => {
      this.listaProfessores = professores
    }) 
  }

  public async adicionar() {
    const modal = await this.modalCtrl.create({
      component: CadastroProfessorPage
    })

    modal.onDidDismiss().then(() => {
      this.listarProfessores();
    })

    return await modal.present();
  }

  public async editar(professor: Professor) {
    const modal = await this.modalCtrl.create({
      component: CadastroProfessorPage,
      componentProps: {
        professor: professor,
        edicao: true
      }
    })

    modal.onDidDismiss().then(() => {
      this.listarProfessores()
    })

    return await modal.present();
  }

 

}
