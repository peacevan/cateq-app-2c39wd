import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/aluno.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})



export class CadastroAlunoPage implements OnInit {

  public cadastroAluno!: string;
  private activatedRoute = inject(ActivatedRoute);
  //ionicForm!: FormGroup;
  public aluno: Aluno = { id: "", nome: "", sobrenome: "", email: "", telefone: "", sexo: "" };

  constructor(public formBuilder: FormBuilder, private rota: Router,
    private alunoServ: AlunoService,
    private modalCtrl: ModalController) { }


  ngOnInit() {

    /*this.ionicForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      sexo: ['', [Validators.required, Validators.minLength(2)]],
    });*/

    this.cadastroAluno = this.activatedRoute.snapshot.paramMap.get('id') as string;

  }
  get errorControl() {
   // return this.ionicForm.controls;
   return  false;
  }
  public registrar() {
    console.log(this.aluno);
    this.alunoServ.adicionar(this.aluno);
    this.rota.navigate(['/turmas']);

  }
  public async dismiss() {
    await this.modalCtrl.dismiss();
  }

}
