import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  friend:any[];
  enemies:any[];
  amigo:boolean = false;

  constructor(private dataServices: DataService) { }

  ngOnInit() {
    
    this.dataServices.getUsuarios().subscribe((usuario:any) =>{

      this.friend = usuario;
      if(this.friend.length !==0 ){
        
      this.amigo = true;
      }
      console.log (this.friend);
     })
    
    

  }


  segmentChanged(event){

    if(event.detail.value=== 'friends'){

      this.amigo = true;
      console.log('friend')      
    }

    if(event.detail.value=== 'enemies'){
      
      this.amigo = false;
      console.log('enemie')      
    }


  }
}
