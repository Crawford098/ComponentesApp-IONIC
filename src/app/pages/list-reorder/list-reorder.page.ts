import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes:string[] = ['Superman','Batman', 'Wonder Woman', 'Flash'];
  
  actived:boolean = false;

  constructor() { }

  ngOnInit() {
  }


  doReorder(event:any){

    //cambiar el arreglo
    const itemMover = this.personajes.splice(event.detail.from,1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover );

    //para quitar el lag
    event.detail.complete();
  
    console.log(this.personajes);
  }

  isActive(){
    this.actived = !this.actived;
  }
}
