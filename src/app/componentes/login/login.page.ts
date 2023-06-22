import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, MenuController, NavController } from '@ionic/angular';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuarioService/usuario.service';
import { MatIconModule } from '@angular/material/icon';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MatIconModule,]
})
export class LoginPage implements OnInit {
  public usuario: Usuario = { id: "", login: "", senha: "", senhaCheck: "" };
  public usuarioFirabase: Usuario = { id: "", login: "", senha: "", senhaCheck: "" };
  constructor(private rota: NavController, private userServ: UsuarioService, public menuCtrl: MenuController
    , private nativeStorage: NativeStorage) { }

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
    let ret = false;
    this.userServ.autenticarUser(this.usuario)
      .then((users) => {
        ret = this.userServ.checkLogin(this.usuario);
        if (ret){
        this.setdadosLogin(this.usuario);
        this.rota.navigateRoot(['/folder']);
      }
      else {
        this.isAlertOpen = true;
      }
      })
      .catch((error) => {
        // Lidar com o erro
      });
  

  }
  public registrar() {
    this.rota.navigateRoot(['/cadastro-usuario']);
  }
  //colocar essa função na inicialização das paginas
  islogado() {
   //se não tiver logado redirecionar para a tela de login

  }
  setdadosLogin(user: Usuario) {
    this.nativeStorage.setItem('userData', { login: user.login, senha: user.senha })
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );

  }

  getDadosLogin() {
    this.nativeStorage.getItem('userData')
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }
  logout(){
    //remover os dados do  this.nativeStorage
    this.nativeStorage.remove('userData')
    .then(
      data => console.log(data),
      error => console.error(error)
    );
  }

}
