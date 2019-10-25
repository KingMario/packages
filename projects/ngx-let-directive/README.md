# NgxLetDirective

This directive helps to store value to a local variable to be bound in the template.

The directive works with Angular 5 and 6. To use it in Angular 4, you may import the .ts file directly (see *Usage*). For Angular 2, you may try it in Angular 4's way, but it's not tested.


## Usage

1.Install `ngx-let-directive`.

```bash
npm i -S ngx-let-directive
```

2.Import `NgxLetDirectiveModule` to your Angular module.

**Angular 4**

```typescript
import { NgxLetDirectiveModule } from 'ngx-let-directive/src';
@NgModule({
  imports: [
    ...
    NgxLetDirectiveModule,
    ...
  ],
  ...
```

**Angular 5+**

```typescript
import { NgxLetDirectiveModule } from 'ngx-let-directive';
@NgModule({
  imports: [
    ...
    NgxLetDirectiveModule,
    ...
  ],
  ...
```

3.Add the "*let" attribute to an element or ngContainer.

```angular2html
<div *let="userObservable | async as user">
  Hello {{user}}!
</div>
```

4.Version History

1.0.1 unable-to-rebind bug fixed
1.0.0 initial version

---
Good luck.
