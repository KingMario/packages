import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { TrimSampleComponent } from './trim-sample/trim-sample.component';

const routes: Routes = [
  {
    path: 'trim',
    component: TrimSampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
