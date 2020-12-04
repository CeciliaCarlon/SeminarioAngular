import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoComprasService } from '../carrito-compras.service';
import { Tecno } from '../electrodomestico-list/tecno';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {

  compras$ : Observable<Tecno[]>;
  total$: Observable<number>;

  constructor(private carrito: CarritoComprasService) {
    this.compras$= carrito.listaCarrito.asObservable();
    this.total$= carrito.total.asObservable();
  }

  ngOnInit(): void {
  }


}
