import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios:Observable<any>;

  @ViewChild(IonList) ionList: IonList
  constructor( private dataServices:DataService) { }

  ngOnInit() {

    this.usuarios = this.dataServices.getUsuarios();
  }





  favorite(user){
    this.ionList.closeSlidingItems();//para cerrar el sliding del list 
    console.log(user);
  }


  share(user){

    this.ionList.closeSlidingItems();
    console.log('Compartiendo...');

    setTimeout(() => {

      console.log(user);
    }, 1500);
  }


  onclick(usuario){
    this.ionList.closeSlidingItems();
    console.log(usuario.name);
  }
}
