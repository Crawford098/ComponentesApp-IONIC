import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0;

  constructor() { }

  ngOnInit() {
  }


  rangeChange( event){

    const valor = event.detail.value;

    this.porcentaje = valor/100;
    console.log(this.porcentaje);


    if(this.porcentaje===1){

      console.log('Barra completa');
    }
  }

}
