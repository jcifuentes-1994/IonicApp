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
  },
  {
    id:2,
    nombre: "Julio",
    apellido: "Cifuentes",
    username: "jcifuentes",
    password: "julio123",
    role:{
      id: 2,
      nombre: "usuario"
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

  obtener_usuario(username: string, password: string): Usuario | null {
    return this.lista_de_usuarios.find(u => u.username === username && u.password === password) || null;
  }
}
