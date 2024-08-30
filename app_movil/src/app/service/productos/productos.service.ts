import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private lista_de_productos: Producto[] = [
    {
      "id": 1,
      "sku": "A123",
      "nombre": "Arroz",
      "compania": "Tucapel",
      "stock": 10,
      "precio": 1500      
    },
    {
      "id": 2,
      "sku": "B234",
      "nombre": "Aceite",
      "compania": "Miraflores",
      "stock": 15,
      "precio": 2200
    }
  ]

  constructor() { }

  public obtener_lista_productos(): Producto[]{
    return this.lista_de_productos;
  }
}
