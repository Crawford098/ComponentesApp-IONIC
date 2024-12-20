import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { ButtonPage } from './button.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ButtonPageRoutingModule {}
