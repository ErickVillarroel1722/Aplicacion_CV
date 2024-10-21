import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'informacion',
        loadChildren: () => import('../informacion/informacion.module').then(m => m.InformacionPageModule)
      },
      {
        path: 'experiencia',
        loadChildren: () => import('../experiencia/experiencia.module').then(m => m.ExperienciaPageModule)
      },
      {
        path: 'educacion',
        loadChildren: () => import('../educacion/educacion.module').then(m => m.EducacionPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/informacion',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
