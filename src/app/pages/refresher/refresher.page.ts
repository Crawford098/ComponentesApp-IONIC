import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items = Array()
  valor:number = 5;
  constructor() { }

  ngOnInit() {
  }

  doRefresh(event){


    

    console.log('buscando datos');

    
    setTimeout(() => {


      this.items = Array(this.valor);

      console.log('datos encontrados');

      // event.detail.complete();
      event.target.complete();
      this.valor += 3;
    }, 1000);
  
  }

  onClick(){

    this.items = Array();
    this.valor = 5;
    

  }

}


