import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinie',
  templateUrl: './infinie.page.html',
  styleUrls: ['./infinie.page.scss'],
})
export class InfiniePage implements OnInit {

  data:any [] = Array(20);

  @ViewChild( IonInfiniteScroll ) infiniteScroll:IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }



  loadData(event){


  // console.log(event)

  setTimeout(() => {
    

    if(this.data.length > 50){

      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }
    const nuevoArr = Array(20);
    this.data.push(...nuevoArr);
    
    // event.target.complete();
    this.infiniteScroll.complete();
  }, 1500);

  }
}
