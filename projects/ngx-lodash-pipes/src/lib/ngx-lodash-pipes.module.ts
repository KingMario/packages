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
import { FillPipe } from './array/fill.pipe';
import { FindIndexPipe } from './array/find-index.pipe';
import { FindLastIndexPipe } from './array/find-last-index.pipe';
import { FlattenPipe } from './array/flatten.pipe';
import { FlattenDeepPipe } from './array/flatten-deep.pipe';
import { FlattenDepthPipe } from './array/flatten-depth.pipe';
import { FromPairsPipe } from './array/from-pairs.pipe';
import { HeadPipe } from './array/head.pipe';
import { IndexOfPipe } from './array/index-of.pipe';
import { InitialPipe } from './array/initial.pipe';
import { IntersectionPipe } from './array/intersection.pipe';
import { IntersectionByPipe } from './array/intersection-by.pipe';
import { IntersectionWithPipe } from './array/intersection-with.pipe';

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
  FillPipe,
  FindIndexPipe,
  FindLastIndexPipe,
  FlattenPipe,
  FlattenDeepPipe,
  FlattenDepthPipe,
  FromPairsPipe,
  HeadPipe,
  IndexOfPipe,
  InitialPipe,
  IntersectionPipe,
  IntersectionByPipe,
  IntersectionWithPipe,
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
