import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { Turma, statusTurma } from '../models/turma.model';
import { TurmasService } from '../services/turmas.service';
import { CadastroTurmasPage } from '../cadastro-turmas/cadastro-turmas.page';

@Component({
  selector: 'turmas',
  templateUrl: './turmas.page.html',
  styleUrls: ['./turmas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TurmasPage implements OnInit {
  public listaTurmas: Turma[] = [];

  constructor(
    private turmasServ: TurmasService, 
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.listarTurmas();
  }

  public listarTurmas() {
    this.turmasServ.getAll().then((turmas) => {
      this.listaTurmas = turmas
    }) 
  }

  public async adicionar() {
    const modal = await this.modalCtrl.create({
      component: CadastroTurmasPage
    })

    modal.onDidDismiss().then(() => {
      this.listarTurmas();
    })

    return await modal.present();
  }

  public async editar(turma: Turma) {
    const modal = await this.modalCtrl.create({
      component: CadastroTurmasPage,
      componentProps: {
        turma: turma,
        edicao: true
      }
    })

    modal.onDidDismiss().then(() => {
      this.listarTurmas()
    })

    return await modal.present();
  }

  public statusBadgeColor(status: statusTurma): string {
    switch(status){
      case statusTurma.pendente:
        return "secondary";
      case statusTurma.emAndamento:
        return "success";
      case statusTurma.finalizada:
        return "warning";
      case statusTurma.cancelada:
        return "danger";
    }
  }

}
