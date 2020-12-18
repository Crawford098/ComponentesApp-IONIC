import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Segment2PageRoutingModule } from './segment2-routing.module';

import { Segment2Page } from './segment2.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Segment2PageRoutingModule,
    PipesModule
  ],
  declarations: [Segment2Page]
})
export class Segment2PageModule {}
