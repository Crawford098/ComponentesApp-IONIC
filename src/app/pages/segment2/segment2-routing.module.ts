import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Segment2Page } from './segment2.page';

const routes: Routes = [
  {
    path: '',
    component: Segment2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Segment2PageRoutingModule {}
