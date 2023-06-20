import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component'
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,AppComponent, FormsModule]
})
export class LoginPage implements OnInit {

  public usuario:  Usuario = {id : "", login : "", senha : "", senhaCheck : ""};
  
  constructor(private rota: Router,private userServ: UsuarioService) { }

  ngOnInit() {
  }
  isAlertOpen = false;
  public alertButtons = ['OK'];

  public setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  public logar() {
    console.log(this.usuario);
    let ret = this.userServ.checkLogin(this.usuario);
    if(ret)
      this.rota.navigate(['/home']);
    else{
      this.isAlertOpen = true;
    }


  }
  public registrar(){
    this.rota.navigate(['/cadastro-usuario']);
  }

}
