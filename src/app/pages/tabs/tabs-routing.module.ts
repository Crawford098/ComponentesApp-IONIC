import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {

    path: '',
    redirectTo:'/tabs/acount',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'acount',
        loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)
      },
  
      {
        path:'contact',
        loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../infinie/infinie.module').then( m => m.InfiniePageModule)
    }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
