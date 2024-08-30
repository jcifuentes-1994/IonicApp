import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/service/productos/productos.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productos: Producto[] = [];
  isAdmin: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private _productoService: ProductosService) {}

  ngOnInit(){
    this.productos = this._productoService.obtener_lista_productos();
    console.info(this.productos);
    const x = this.router.getCurrentNavigation();
    console.info(x);
    const state = x?.extras.state;
    console.info(state);
    if (state && state['usuario']) {
      this.isAdmin = state['usuario'].role === 1;
    }else{
      console.error('Rol de usuario no determinado')
    }
  }

  detalle_producto(producto: Producto){
    console.info(producto)
    this.router.navigate(['detalle-producto'],{
      queryParams:{
        producto: JSON.stringify(producto)
      },
      relativeTo: this.route
    })
  }

  agregarProducto(){
    
  }

}
