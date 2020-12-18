import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000, 1996];
  fechaActual:Date = new Date();

  customPikerOptions ={
    buttons:[{
      text:'hola',
      handler:(event)=>{
        console.log(event)
      }
    },{
      text:'mundo',
      handler:()=>{
        console.log('log')
      }
    }]
    

  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){

  console.log(event);

  console.log(event.detail.value);
  }

}
