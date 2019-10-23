# Angular Lodash Pipes

This collection of pipes can help you simplify your [lodash](https://lodash.com/) calls for data binding. And they are naturally chainable through multiple pipes.

There are two forms of pipes provided: umbrella-form and direct-form.

The umbrella-form pipe (`_`) covers all available functions of lodash. When using the umbrella-form pipe (`_`), an arbitrary function name should be provided as the first argument. You may use the `_` pipe with caution that you should check the function name existence in lodash.
                                                                       
A direct-form pipe, such as `chunk`, `compact`, ..., has exactly the same lodash method name. At present, the number of pipes in this form is limited, and it is planned to gradually implement all the methods of lodash.

Available pipes are listed [here](http://mario.studio/packages/lodash-pipes).

## Usage

1.Install `lodash` and `ngx-lodash-pipes`.

```bash
npm i -S lodash ngx-lodash-pipes
```

2.Import `NgxLodashPipesModule` to your Angular module.

**Angular 4**

```typescript
import { NgxLodashPipesModule } from 'ngx-lodash-pipes/src';
@NgModule({
  imports: [
    ...
    NgxLodashPipesModule,
    ...
  ],
  ...
```

**Angular 5+**

```typescript
import { NgxLodashPipesModule } from 'ngx-lodash-pipes';
@NgModule({
  imports: [
    ...
    NgxLodashPipesModule,
    ...
  ],
  ...
```

*A module that only exports and declares the umbrella-form pipe (`_`), `NgxLodashPipeModule` is also available in this library. This module takes dramatically small footprint.* 

3.Use lodash pipes in your angular component template.

interpolation:

```angular2html
Umbrella-form: {{ [ 'a', 'b', 'c', 'd' ]  | _: 'chunk' : 2}}

Direct-form: {{ [ 'a', 'b', 'c', 'd' ]  | chunk: 2}}
```

and more you want to do than interpolation:

```angular2html
<div *ngFor="let pair of [ 'a', 'b', 'c', 'd' ] | chunk: 2 as pairs">
  <!-- Do something with the looping variable, pair -->
  <!-- and even with the list, pairs -->
</div>
```

4.How to contribute?

Contributions are welcome.

The `ngx-lodash-pipes` package is a normal Angular library in the `projects/ngx-lodash-pipes` folder.

There's an `LodashPipesSampleComponent` in the packages project. This component is used for examples, documentation, and testing purposes. All the pipe arguments are from the examples of [lodash official documentation](https://lodash.com/docs).

Please fork [this repository](https://github.com/kingmario/packages) and add your pipes in the `ngx-lodash-pipes` package. Add your samples of the new-added pipes in the `LodashPipesSampleComponent` following the existing examples. The example arguments from lodash official documentation are recommended.

Then you can send your pull request. For those just getting started, Github has a [howto](https://help.github.com/en/articles/about-pull-requests).

Thanks.

5.Version History

* 0.0.8 Collection pipes finished
* 0.0.7 Array pipes finished
* 0.0.6 add some new pipes
* 0.0.5 ExpressionChangedAfterItHasBeenCheckedError of `_: 'pull'` etc. handled, add some new pipes
* 0.0.4 Angular 8 compiler, umdModuleIds for lodash, add some new pipes
* 0.0.3 ExpressionChangedAfterItHasBeenCheckedError of `_: 'fill'` handled, add some new pipes
* 0.0.2 remove the umbrella-form pipe (`_`) from the module exports and add an NgxLodashPipeModule to export, add some new pipes
* 0.0.1 initial version exports the umbrella-form pipe (`_`) and NgxLodashPipesModule with some
---
Good luck.
