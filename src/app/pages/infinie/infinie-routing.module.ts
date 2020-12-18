import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniePage } from './infinie.page';

const routes: Routes = [
  {
    path: '',
    component: InfiniePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiniePageRoutingModule {}
