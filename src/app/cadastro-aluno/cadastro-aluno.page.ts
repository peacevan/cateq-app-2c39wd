import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators,ReactiveFormsModule,FormControl} from '@angular/forms';



import { IonicModule, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/aluno.model';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss']	,
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})



export class CadastroAlunoPage implements OnInit {
  ionicForm!: FormGroup;

  public cadastroAluno!: string;
  private activatedRoute = inject(ActivatedRoute);
  
  public aluno: Aluno = { id: "", nome: "", sobrenome: "", email: "", telefone: "", sexo: "", fotourl:"https://ionicframework.com/docs/img/demos/avatar.svg"};
  public imagePath?="https://ionicframework.com/docs/img/demos/avatar.svg";
  constructor(
    public formBuilder: FormBuilder, 
	private rota: Router,
    private alunoServ: AlunoService,
    private modalCtrl: ModalController,
	public photoService: PhotoService,

	
	) 
	{
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
  
     /*  this.ionicForm = this.formBuilder.group({
	     nome: [null, Validators.required],
	   
	   })*/
  
  }
  get errorControl() {
   return this.ionicForm.controls;
   return  false;
  }
  public registrar() {
    console.log(this.aluno);
    this.alunoServ.adicionar(this.aluno);
    this.rota.navigate(['/turmas/list']);

  }
  public async dismiss() {
    await this.modalCtrl.dismiss();
  }
  
  addPhotoToGallery() {
  this.photoService.addNewToGallery()
 
  //const imageElement = document.getElementById('foto-avatar') as HTMLImageElement;
  this.imagePath= this.photoService.photos.webviewPath;
 // imageElement.src =  this.imagePath ;
}
takePicture(){
  const photo =this.photoService.addNewToGallery();
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
  

}
