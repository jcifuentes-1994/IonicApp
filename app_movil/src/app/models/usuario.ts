import {Role} from "./role"

export interface Usuario{
    id: number;
    nombre: string;
    apellido: string;
    username: string;
    password: string;
    role: Role;
}