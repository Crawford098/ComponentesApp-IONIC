import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment2',
  templateUrl: './segment2.page.html',
  styleUrls: ['./segment2.page.scss'],
})
export class Segment2Page implements OnInit {

  constructor(private dataService:DataService) { }
  
  superHeroes:Observable<any>

  publisher:string = 'todos';


  ngOnInit() {

    this.superHeroes = this.dataService.getHeroes();

  }




  segmentChanged(event){

    console.log(event.detail.value);
    this.publisher = event.detail.value;
  
  }

}
