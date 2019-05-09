import { NgModule } from '@angular/core';

// umbrella
import { NgxLodashPipeModule } from './ngx-lodash-pipe.module';

// array
import { ChunkPipe } from './array/chunk.pipe';
import { CompactPipe } from './array/compact.pipe';
import { ConcatPipe } from './array/concat.pipe';
import { DifferencePipe } from './array/difference.pipe';
import { DifferenceByPipe } from './array/difference-by.pipe';
import { DifferenceWithPipe } from './array/difference-with.pipe';
import { DropPipe } from './array/drop.pipe';
import { DropRightPipe } from './array/drop-right.pipe';
import { DropRightWhilePipe } from './array/drop-right-while.pipe';
import { DropWhilePipe } from './array/drop-while.pipe';

// collection
import { EveryPipe } from './collection/every.pipe';

const ArrayPipes = [
  ChunkPipe,
  CompactPipe,
  ConcatPipe,
  DifferencePipe,
  DifferenceByPipe,
  DifferenceWithPipe,
  DropPipe,
  DropRightPipe,
  DropRightWhilePipe,
  DropWhilePipe,
];

const CollectionPipes = [
  EveryPipe,
];

const pipes = [
  ArrayPipes,
  CollectionPipes,
];

@NgModule({
  imports: [],
  declarations: pipes,
  exports: [
    NgxLodashPipeModule,
    pipes,
  ],
})
export class NgxLodashPipesModule {
}
