import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToustPage } from './toust.page';

const routes: Routes = [
  {
    path: '',
    component: ToustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToustPageRoutingModule {}
