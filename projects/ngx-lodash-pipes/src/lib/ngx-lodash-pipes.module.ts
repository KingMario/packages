/*
 * Copyright (c) 2019. Mario Studio. All right reserved.
 */

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
import { TailPipe } from './array/tail.pipe';
import { TakePipe } from './array/take.pipe';
import { TakeRightPipe } from './array/take-right.pipe';
import { TakeRightWhilePipe } from './array/take-right-while.pipe';
import { TakeWhilePipe } from './array/take-while.pipe';
import { UnionPipe } from './array/union.pipe';
import { UnionByPipe } from './array/union-by.pipe';
import { UnionWithPipe } from './array/union-with.pipe';
import { UniqPipe } from './array/uniq.pipe';
import { UniqByPipe } from './array/uniq-by.pipe';
import { UniqWithPipe } from './array/uniq-with.pipe';
import { UnzipPipe } from './array/unzip.pipe';
import { UnzipWithPipe } from './array/unzip-with.pipe';
import { WithoutPipe } from './array/without.pipe';
import { XorPipe } from './array/xor.pipe';
import { XorByPipe } from './array/xor-by.pipe';
import { XorWithPipe } from './array/xor-with.pipe';
import { ZipPipe } from './array/zip.pipe';
import { ZipObjectPipe } from './array/zip-object.pipe';
import { ZipObjectDeepPipe } from './array/zip-object-deep.pipe';
import { ZipWithPipe } from './array/zip-with.pipe';

// collection
import { CountByPipe } from './collection/count-by.pipe';
import { EveryPipe } from './collection/every.pipe';
import { FilterPipe } from './collection/filter.pipe';
import { FindPipe } from './collection/find.pipe';
import { FindLastPipe } from './collection/find-last.pipe';
import { FlatMapPipe } from './collection/flat-map.pipe';
import { FlatMapDeepPipe } from './collection/flat-map-deep.pipe';
import { FlatMapDepthPipe } from './collection/flat-map-depth.pipe';
import { ForEachPipe } from './collection/for-each.pipe';
import { ForEachRightPipe } from './collection/for-each-right.pipe';
import { GroupByPipe } from './collection/group-by.pipe';
import { IncludesPipe } from './collection/includes.pipe';
import { InvokeMapPipe } from './collection/invoke-map.pipe';
import { KeyByPipe } from './collection/key-by.pipe';
import { MapPipe } from './collection/map.pipe';
import { OrderByPipe } from './collection/order-by.pipe';
import { PartitionPipe } from './collection/partition.pipe';
import { ReducePipe } from './collection/reduce.pipe';
import { ReduceRightPipe } from './collection/reduce-right.pipe';
import { RejectPipe } from './collection/reject.pipe';
import { SamplePipe } from './collection/sample.pipe';
import { SampleSizePipe } from './collection/sample-size.pipe';
import { ShufflePipe } from './collection/shuffle.pipe';
import { SizePipe } from './collection/size.pipe';
import { SomePipe } from './collection/some.pipe';
import { SortByPipe } from './collection/sort-by.pipe';

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
  TailPipe,
  TakePipe,
  TakeRightPipe,
  TakeRightWhilePipe,
  TakeWhilePipe,
  UnionPipe,
  UnionByPipe,
  UnionWithPipe,
  UniqPipe,
  UniqByPipe,
  UniqWithPipe,
  UnzipPipe,
  UnzipWithPipe,
  WithoutPipe,
  XorPipe,
  XorByPipe,
  XorWithPipe,
  ZipPipe,
  ZipObjectPipe,
  ZipObjectDeepPipe,
  ZipWithPipe,
];

const CollectionPipes = [
  CountByPipe,
  EveryPipe,
  FilterPipe,
  FindPipe,
  FindLastPipe,
  FlatMapPipe,
  FlatMapDeepPipe,
  FlatMapDepthPipe,
  ForEachPipe,
  ForEachRightPipe,
  GroupByPipe,
  IncludesPipe,
  InvokeMapPipe,
  KeyByPipe,
  MapPipe,
  OrderByPipe,
  PartitionPipe,
  ReducePipe,
  ReduceRightPipe,
  RejectPipe,
  SamplePipe,
  SampleSizePipe,
  ShufflePipe,
  SizePipe,
  SomePipe,
  SortByPipe,
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
