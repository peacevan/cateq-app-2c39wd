import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { Aluno } from '../models/aluno.model';
import { AlunoService } from '../services/aluno.service';
import { CadastroAlunoPage } from '../cadastro-aluno/cadastro-aluno.page';
@Component({
  selector: 'alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class alunosPage implements OnInit {
  public listaAlunos: Aluno[] = [];

  constructor(
    private alunosServ: AlunoService, 
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.listarAlunos();
  }

  public listarAlunos() {
    this.alunosServ.getAll().then((alunos:any) => {
      this.listaAlunos = alunos
    }) 
  }

  public async adicionar() {
    const modal = await this.modalCtrl.create({
      component: CadastroAlunoPage
    })

    modal.onDidDismiss().then(() => {
      this.listarAlunos();
    })

    return await modal.present();
  }

  public async editar(aluno: Aluno) {
    const modal = await this.modalCtrl.create({
      component: CadastroAlunoPage,
      componentProps: {
        aluno: aluno,
        edicao: true
      }
    })

    modal.onDidDismiss().then(() => {
      this.listarAlunos()
    })

    return await modal.present();
  }

  /*public statusBadgeColor(status: statusTurma): string {
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
  }*/

}
