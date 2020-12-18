import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToustPageRoutingModule } from './toust-routing.module';

import { ToustPage } from './toust.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToustPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToustPage]
})
export class ToustPageModule {}
