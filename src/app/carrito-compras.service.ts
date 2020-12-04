import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tecno } from './electrodomestico-list/tecno';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  private _listaCarrito: Tecno[] = [];
  private _total: number = 0;

  listaCarrito: BehaviorSubject<Tecno[]> = new BehaviorSubject([]);
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);

  constructor() { }

  addAlCarrito(producto: Tecno) {
    let item: Tecno = this._listaCarrito.find((v1)=>v1.titulo == producto.titulo);
    if(!item){
      this._listaCarrito.push({... producto});
    }
    else{
      item.cantidad+= producto.cantidad;
    }
    this._total = this._listaCarrito.reduce((a, c) => c.precio * c.cantidad + a, 0);
    this.listaCarrito.next(this._listaCarrito); //notificar a los suscriptores los eventos
    this.total.next(this._total);
  }

 
}
