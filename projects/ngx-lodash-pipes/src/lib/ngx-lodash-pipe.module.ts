/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

import { NgModule } from '@angular/core';
// umbrella-form pipe
import { LodashPipe } from './lodash.pipe';

@NgModule({
  imports: [],
  declarations: [LodashPipe],
  exports: [LodashPipe],
})
export class NgxLodashPipeModule {
}
