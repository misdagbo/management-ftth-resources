import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubheaderTypeSearchComponent } from '../../theme/pages/subheader--type-search/subheader--type-search.component';
import { RessourcesComponent } from './ressources/ressources.component';

const routes: Routes = [
  {
    'path': '',
    'component': SubheaderTypeSearchComponent,
    'children': [
      {
        'path': '',
        'component': RessourcesComponent,
        'data': { title: 'Ressources' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourcesRoutingModule { }
