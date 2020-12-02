import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tecno } from '../electrodomestico-list/tecno';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad: number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number>= new EventEmitter<number>();

  @Output()
  maxAlcanzado: EventEmitter<boolean>= new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  menosCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  masCantidad(): void {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.maxAlcanzado.emit(true);
    }
  }

  changeCantidad(event): void{
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);
  }

}
