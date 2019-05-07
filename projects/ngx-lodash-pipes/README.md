# Angular Lodash Pipes

This collection of pipes can help you simplify your [lodash](https://lodash.com/) calls for data binding. And they are naturally chainable through multiple pipes.

A general purpose form of pipe (`_`) and several specific form of pipes (e.g., `chunk`, `compact`, etc.) are provided.

When using the general purpose form of pipe `_`, an arbitrary function name should be provided as the first argument. You may use the `_` pipe with caution that you should check the function name existence in lodash.

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

3.Use lodash pipes in your angular component template.

```html
General purpose form: {{ [ 'a', 'b', 'c', 'd' ]  | _: 'chunk' : 2}}

Specific pipe form: {{ [ 'a', 'b', 'c', 'd' ]  | chunk: 2}}
```

4.How to contribute?

Contributions are welcome.

The `ngx-lodash-pipes` package is a normal Angular library in the `projects/ngx-lodash-pipes` folder.

There's an `LodashPipesSampleComponent` in the packages project. This component is used for examples, documentation, and testing purposes. All the pipe arguments are from the examples of [lodash official documentation](https://lodash.com/docs).

Please fork this repository and add your pipes in the `ngx-lodash-pipes` package. Add your samples of the new-added pipes in the `LodashPipesSampleComponent` following the existing examples. The example arguments from lodash official documentation are recommended.

Then you can send your pull request. For those just getting started, Github has a [howto](https://help.github.com/en/articles/about-pull-requests).

Thanks.

---
Good luck.
