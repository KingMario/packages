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
import { JoinPipe } from './array/join.pipe';
import { LastPipe } from './array/last.pipe';
import { LastIndexOfPipe } from './array/last-index-of.pipe';
import { NthPipe } from './array/nth.pipe';
import { PullPipe } from './array/pull.pipe';
import { PullAllPipe } from './array/pull-all.pipe';
import { PullAllByPipe } from './array/pull-all-by.pipe';
import { PullAllWithPipe } from './array/pull-all-with.pipe';
import { PullAtPipe } from './array/pull-at.pipe';
import { RemovePipe } from './array/remove.pipe';
import { ReversePipe } from './array/reverse.pipe';
import { SlicePipe } from './array/slice.pipe';
import { SortedIndexPipe } from './array/sorted-index.pipe';
import { SortedIndexByPipe } from './array/sorted-index-by.pipe';
import { SortedIndexOfPipe } from './array/sorted-index-of.pipe';
import { SortedLastIndexPipe } from './array/sorted-last-index.pipe';
import { SortedLastIndexByPipe } from './array/sorted-last-index-by.pipe';
import { SortedLastIndexOfPipe } from './array/sorted-last-index-of.pipe';
import { SortedUniqPipe } from './array/sorted-uniq.pipe';
import { SortedUniqByPipe } from './array/sorted-uniq-by.pipe';

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
  JoinPipe,
  LastPipe,
  LastIndexOfPipe,
  NthPipe,
  PullPipe,
  PullAllPipe,
  PullAllByPipe,
  PullAllWithPipe,
  PullAtPipe,
  RemovePipe,
  ReversePipe,
  SlicePipe,
  SortedIndexPipe,
  SortedIndexByPipe,
  SortedIndexOfPipe,
  SortedLastIndexPipe,
  SortedLastIndexByPipe,
  SortedLastIndexOfPipe,
  SortedUniqPipe,
  SortedUniqByPipe,
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
