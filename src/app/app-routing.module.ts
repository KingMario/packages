import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LowerCaseSampleComponent } from './lower-case-sample/lower-case-sample.component';
import { TrimSampleComponent } from './trim-sample/trim-sample.component';
import { UpperCaseSampleComponent } from './upper-case-sample/upper-case-sample.component';
import { CleaveSampleComponent } from './cleave-sample/cleave-sample.component';

const routes: Routes = [
  {
    path: 'lower-case',
    component: LowerCaseSampleComponent,
  },
  {
    path: 'trim',
    component: TrimSampleComponent,
  },
  {
    path: 'upper-case',
    component: UpperCaseSampleComponent,
  },
  {
    path: 'cleave',
    component: CleaveSampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
