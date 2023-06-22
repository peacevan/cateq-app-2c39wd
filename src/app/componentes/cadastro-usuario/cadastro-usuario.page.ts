import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,MenuController,NavController } from '@ionic/angular';
import { LoginPageModule } from '../login/login.module';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuarioService/usuario.service';
import { FormGroup, 
  FormControl, 
  Validators,
  FormBuilder, 
  FormArray} from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroUsuarioPage implements OnInit {
  public usuario:  Usuario = {id : "", login : "", senha : "", senhaCheck : ""};
  public formUser!: FormGroup;


  constructor(private rota: NavController,
       private userServ: UsuarioService,
       private formBuilder: FormBuilder,
       private menuCtrl: MenuController
       ) { }
       ionViewWillEnter() {
        this.menuCtrl.enable(false);
       }

  ngOnInit() {
   
    this.formUser = this.formBuilder.group({
      login: ['',
            Validators.compose([
              Validators.minLength(5), 
              Validators.maxLength(150),
              Validators.required
            ])
      ],
      senha: ['',
        Validators.compose([
          Validators.minLength(8),
          Validators.required
        ])
      ]
    });
  }
  public registrar() {
    this.userServ.add(this.usuario);
    this.rota.navigateRoot(['/login']);
   }

 
}
