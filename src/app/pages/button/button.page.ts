import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  favorito:boolean = true

  constructor() { }

  ngOnInit() {
  }



  onClick(){

    this.favorito = !this.favorito;
  }

}
