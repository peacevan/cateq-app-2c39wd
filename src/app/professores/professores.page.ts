import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { Turma, statusTurma } from '../models/turma.model';
import { ProfessoresService } from '../services/professores.service';
import { CadastroProfessoresPage } from '../cadastro-professores/cadastro-professores.page';

@Component({
  selector: 'professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfessoresPage implements OnInit {
  public listaProfessores: Turma[] = [];

  constructor(
    private professoresServ: ProfessoresService, 
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.listarProfessores();
  }

  public listarProfessores() {
    this.professoresServ.getAll().then((professores) => {
      this.listaprofessores = professores
    }) 
  }

  public async adicionar() {
    const modal = await this.modalCtrl.create({
      component: CadastroprofessoresPage
    })

    modal.onDidDismiss().then(() => {
      this.listarProfessores();
    })

    return await modal.present();
  }

  public async editar(turma: Turma) {
    const modal = await this.modalCtrl.create({
      component: CadastroProfessoresPage,
      componentProps: {
        turma: turma,
        edicao: true
      }
    })

    modal.onDidDismiss().then(() => {
      this.listarProfessores()
    })

    return await modal.present();
  }

 

}
