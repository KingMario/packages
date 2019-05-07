import { NgModule } from '@angular/core';
// wildcard
import { LodashPipe } from './lodash.pipe';
// array
import { ChunkPipe } from './array/chunk.pipe';
import { EveryPipe } from './collection/every.pipe';
import { CompactPipe } from './array/compact.pipe';
import { ConcatPipe } from './array/concat.pipe';
import { DifferencePipe } from './array/difference.pipe';
import { DifferenceByPipe } from './array/difference-by.pipe';
import { DifferenceWithPipe } from './array/difference-with.pipe';
import { DropPipe } from './array/drop.pipe';

const ArrayPipes = [
  ChunkPipe,
  EveryPipe,
  CompactPipe,
  ConcatPipe,
  DifferencePipe,
  DifferenceByPipe,
  DifferenceWithPipe,
  DropPipe,
];

const pipes = [
  LodashPipe,

  ArrayPipes,
];

@NgModule({
  imports: [],
  declarations: pipes,
  exports: pipes,
})
export class NgxLodashPipesModule {
}
