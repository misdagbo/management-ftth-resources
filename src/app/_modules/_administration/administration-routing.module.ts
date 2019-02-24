import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubheaderTypeSearchComponent } from '../../theme/pages/subheader--type-search/subheader--type-search.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
  {
    'path': '',
    'component': SubheaderTypeSearchComponent,
    'children': [
      {
        'path': '',
        'component': AdministrationComponent,
        'data': { title: 'Administration' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
