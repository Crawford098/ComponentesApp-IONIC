import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniePageRoutingModule } from './infinie-routing.module';

import { InfiniePage } from './infinie.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiniePageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfiniePage]
})
export class InfiniePageModule {}
