import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  lista_de_usuarios: Usuario[] = [{
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    username: "jperez",
    password: "juan123",
    role: {
      id: 1,
      nombre: "admin"
    }
  }

  ]

  constructor() { }

  validar_usuario(username: String, password: String){
    for (let i = 0; i < this.lista_de_usuarios.length; i++) {
      if (this.lista_de_usuarios[i].username == username && this.lista_de_usuarios[i].password == password) {
        return true;
      }
      
    }
    return false;
  }
}
