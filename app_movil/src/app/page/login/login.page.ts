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
      const usuario = this._usuarioService.obtener_usuario(username,password);
      if (usuario) {
      //dirigir a otra pestaña
      console.info("usuario existe")

      this.router.navigate(['home'],{
        state: {
          usuario:{
            username: usuario.username,
            role: usuario.role.id
          }
        }
      });
    }
    }else{
      console.error("usuario no existe")
    }
  }
}
