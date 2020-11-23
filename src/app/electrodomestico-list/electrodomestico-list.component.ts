import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electrodomestico-list',
  templateUrl: './electrodomestico-list.component.html',
  styleUrls: ['./electrodomestico-list.component.scss']
})
export class ElectrodomesticoListComponent implements OnInit {

  tecno1={
    "titulo": "Samsung Galaxy S7",
    "descripcion": "Celular alta gama",
    "precio": 150000,
    "stock": 10,
    "imagen": "assets/img/samsungs7.jpg",
  }

  tecno2={
    "titulo": "Iphone X",
    "descripcion": "A 10 años de el primer Iphone",
    "precio": 500000,
    "stock": 20,
    "imagen": "assets/img/iphonex.jpg",
  }

  tecno3={
    "titulo": "Samsung Galaxy Note10",
    "descripcion": "Celular alta gama para diseño",
    "precio": 100000,
    "stock": 24,
    "imagen": "assets/img/note10.png",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
