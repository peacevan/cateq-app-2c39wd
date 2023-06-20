import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,ModalController } from '@ionic/angular';
import { novoProfessor } from '../models/professor.model';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.page.html',
  styleUrls: ['./cadastro-professor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroProfessorPage implements OnInit {
  public titulo = "Cadastrar Professor";
  public edicao = false;
  public professor = novoProfessor();
  public maxDateLimit = new Date();

  constructor(
    private professorServ: ProfessorService,
    private modalCtrl: ModalController) { 
      
    }

  ngOnInit() {
    if(this.edicao)
      this.titulo = "Editar professor"

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
    console.log(this.professor)
    
    if(this.professor.nome && this.professor.email && this.professor.telefone) {
      this.professorServ.adicionar(this.professor).then(() => {
        this.dismiss();
      })
    }
  }

  public async editar() {
    console.log(this.professor)
    
    if(this.professor.nome && this.professor.email && this.professor.telefone) {
      this.professorServ.editar(this.professor).then(() => {
        this.dismiss();
      })
    }

  }

  public async dismiss() {
    await this.modalCtrl.dismiss();
  }
}