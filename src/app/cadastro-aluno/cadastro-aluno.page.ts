import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';



import { IonicModule, ModalController,NavController } from '@ionic/angular';

import { Router } from '@angular/router';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/aluno.model';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})



export class CadastroAlunoPage implements OnInit {
  ionicForm!: FormGroup;

  public cadastroAluno!: string;
  private activatedRoute = inject(ActivatedRoute);

  public aluno: Aluno = { id: "", nome: "", sobrenome: "", email: "", telefone: "", sexo: "", fotourl: "https://ionicframework.com/docs/img/demos/avatar.svg" };
  public imagePath?= "https://ionicframework.com/docs/img/demos/avatar.svg";
  constructor(
    public formBuilder: FormBuilder,
    private rota: Router,
    private alunoServ: AlunoService,
    private modalCtrl: ModalController,
    public photoService: PhotoService,
    public uploadService: UploadService,
    private navCtrl: NavController
  ) {
  }


  ngOnInit() {
    // this.formInit();
    this.cadastroAluno = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  formInit(): void {

    this.ionicForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sobrenome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required, Validators.email]),
      sexo: new FormControl('', [Validators.required, Validators.email]),


    });

   
  }
  get errorControl() {
    return this.ionicForm.controls;
    return false;
  }
  public registrar() {
    console.log(this.aluno);

    const imgElement = document.getElementById('foto_aluno') as HTMLImageElement;
    const srcValue = imgElement.src;
    this.SaveFotoAndDataInFirebase();

  }
  public async dismiss() {
    await this.modalCtrl.dismiss();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery()
    this.imagePath = this.photoService.photos.webviewPath;

  }
  takePicture() {
    const photo = this.photoService.addNewToGallery();
    console.log(photo);

  }

  submitForm = () => {
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

  SaveFotoAndDataInFirebase() {
     var img = document.getElementById('foto_aluno') as HTMLImageElement;
     const srcValue = img.src;
     console.log(srcValue);
     // Faz a solicitação para obter o conteúdo da imagem
     var c = document.createElement('canvas');
     c.height = img.naturalHeight;
     c.width = img.naturalWidth;
     var ctx = c.getContext('2d');
     ctx?.drawImage(img, 0, 0, c.width, c.height);
     var base64String = c.toDataURL();
     this.uploadImage(base64String);
   

  }

  uploadImage(imageData: any) {
    this.uploadService.uploadImage(imageData)
      .then(downloadUrl => {
        console.log('Imagem enviada com sucesso:', downloadUrl);
        this.aluno.fotourl=downloadUrl;
        // Faça algo com o URL da imagem, como salvar em um banco de dados.
        this.alunoServ.adicionar(this.aluno);
        // this.rota.navigate(['/turmas/list']);
        this.navCtrl.navigateForward('/turmas/list');
        window.location.href='/turmas/list';
      })
      .catch(error => {
        console.error('Erro ao enviar a imagem:', error);
      });
  }



}
