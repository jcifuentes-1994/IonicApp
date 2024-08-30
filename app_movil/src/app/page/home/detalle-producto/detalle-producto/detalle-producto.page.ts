import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  producto!: Producto;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.producto = JSON.parse(data['producto'])
    });
    console.info(this.producto)
  }

  goBack(){
    this.navCtrl.back();
  }

}
