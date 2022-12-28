import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  val1!: number;
  val2!: number;
  rta!:number;
  suma(){
    // alert(this.val2)
    this.rta = this.val1+this.val2;
  }
  resta(){
    // alert(this.val2)
    this.rta = this.val1-this.val2;
  }
  multiplicacion(){
    // alert(this.val2)
    this.rta = this.val1*this.val2;
  }
  division(){
    // alert(this.val2)
    this.rta = this.val1/this.val2;
  }
}
