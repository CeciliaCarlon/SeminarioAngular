import { Component, OnInit } from '@angular/core';
import { Tecno } from './tecno';

@Component({
  selector: 'app-electrodomestico-list',
  templateUrl: './electrodomestico-list.component.html',
  styleUrls: ['./electrodomestico-list.component.scss']
})
export class ElectrodomesticoListComponent {

  productos: Tecno[]=[
  {
    titulo: "Samsung Galaxy S7",
    descripcion: "Celular alta gama",
    precio: 150000,
    stock: 10,
    oferta: true,
    imagen: "assets/img/samsungs7.jpg",
  },
  {
    titulo: "Iphone X",
    descripcion: "A 10 años de el primer Iphone",
    precio: 500000,
    stock: 0,
    oferta: false,
    imagen: "assets/img/iphonex.jpg",
  },
  {
    titulo: "Samsung Galaxy Note10",
    descripcion: "Celular alta gama para diseño",
    precio: 100000,
    stock: 24,
    oferta: false,
    imagen: "assets/img/note10.png",
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
