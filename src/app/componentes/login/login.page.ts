import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,MenuController,NavController } from '@ionic/angular';
//import { AppComponent } from '../../app/app.component'
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuarioservice/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  public usuario:  Usuario = {id : "", login : "", senha : "", senhaCheck : ""};
  
  constructor(private rota: NavController,private userServ: UsuarioService,public menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

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
      this.rota.navigateRoot(['/cadastro-usuario']);
    else{
      this.isAlertOpen = true;
    }


  }
  public registrar(){
    this.rota.navigateRoot(['/cadastro-usuario']);
  }

}