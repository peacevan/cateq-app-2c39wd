import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { TurmasService } from '../services/turmas.service';
import { novaTurma } from '../models/turma.model';

@Component({
  selector: 'app-cadastro-turmas',
  templateUrl: './cadastro-turmas.page.html',
  styleUrls: ['./cadastro-turmas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroTurmasPage implements OnInit {
  public titulo = "Cadastrar turma";
  public edicao = false;
  public turma = novaTurma();
  public maxDateLimit = new Date();

  constructor(
    private turmaServ: TurmasService,
    private modalCtrl: ModalController) { 
      
    }

  ngOnInit() {
    if(this.edicao)
      this.titulo = "Editar turma"

    this.maxDateLimit.setFullYear(this.maxDateLimit.getFullYear() + 4);
  }

  public salvar(){
    if(this.edicao)
      this.editar()
    else
      this.adicionar()
  }

  public async adicionar() {
    let uid: any = Date.now(); 
    uid = uid.toString(16);
    console.log(this.turma)
    
    if(this.turma.apelido && this.turma.descricao && this.turma.responsavel) {
      this.turmaServ.adicionar(this.turma).then(() => {
        this.dismiss();
      })
    }
  }

  public async editar() {
    console.log(this.turma)
    
    if(this.turma.apelido && this.turma.descricao && this.turma.responsavel) {
      this.turmaServ.editar(this.turma).then(() => {
        this.dismiss();
      })
    }

  }

  public async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
