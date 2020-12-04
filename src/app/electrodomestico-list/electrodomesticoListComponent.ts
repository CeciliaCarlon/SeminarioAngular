import { Component } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Tecno } from './tecno';


@Component({
  selector: 'app-electrodomestico-list',
  templateUrl: './electrodomestico-list.component.html',
  styleUrls: ['./electrodomestico-list.component.scss']
})

export class electrodomesticoListComponent {

  productos: Tecno[] = [
    {
      titulo: "Samsung Galaxy S7",
      descripcion: "Celular alta gama",
      precio: 8000,
      stock: 10,
      oferta: true,
      imagen: "assets/img/samsungs7.jpg",
      cantidad: 0,
    },
    {
      titulo: "Iphone X",
      descripcion: "A 10 años de el primer Iphone",
      precio: 500000,
      stock: 0,
      oferta: false,
      imagen: "assets/img/iphonex.jpg",
      cantidad: 0,
    },
    {
      titulo: "Samsung Galaxy Note10",
      descripcion: "Celular alta gama para diseño",
      precio: 100000,
      stock: 24,
      oferta: false,
      imagen: "assets/img/note10.png",
      cantidad: 0,
    },
    {
      titulo: "Motorola E6 plus",
      descripcion: "Celular alta gama",
      precio: 15000,
      stock: 3,
      oferta: true,
      imagen: "assets/img/motorola.jpg",
      cantidad: 0,
    },
    {
      titulo: "Samguns Galaxy Flip Z",
      descripcion: "Celular alta gama que se dobla",
      precio: 150000,
      stock: 8,
      oferta: false,
      imagen: "assets/img/samsungFlip.jpg",
      cantidad: 0,
    },
    {
      titulo: "Motorola razr 2020",
      descripcion: "Celular clasico pero flip",
      precio: 140000,
      stock: 0,
      oferta: false,
      imagen: "assets/img/motorolaFlip.jpg",
      cantidad: 0,
    },
    {
      titulo: "Iphone 12 pro",
      descripcion: "Ultimo lanzamiento de iphone",
      precio: 1000000,
      stock: 15,
      oferta: false,
      imagen: "assets/img/iphone12.jpg",
      cantidad: 0,
    },
  ];

  constructor(private carrito: CarritoComprasService) { }

  ngOnInit(): void {
  }

  addAlCarrito(producto) : void{
    this.carrito.addAlCarrito(producto);
    producto.stock -= producto.cantidad;
    producto.cantidad=0;
  }

  maxAlcanzado($e: boolean){
    if($e){
      alert("Ya no se pueden agregar mas productos");
    }
  }

}
