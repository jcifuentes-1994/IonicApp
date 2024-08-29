import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/service/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private _usuarioService: UsuariosService, private router:Router) { }

  ngOnInit() {
  }

  login(username: string, password: string){
    if (this._usuarioService.validar_usuario(username,password)) {
      //dirigir a otra pestaña
      console.info("usuario existe")

      this.router.navigate(['home'],{
        state: {
          usuario:{
            username: username,
            password: password
          }
        }
      })
    }else{
      console.error("usuario no existe")
    }
  }
}
