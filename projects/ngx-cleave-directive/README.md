# Angular Cleave Directive

This directive integrates cleave.js into Angular Form.

It lies on a simple fact that *Angular listens to `input` event to bring the view-to-model binding into being*.

The directive works with Angular 5 and 6. To use it in Angular 4, you may import the .ts file directly (see *Usage*). For Angular 2, you may try it in Angular 4's way, but it's not guaranteed to work.


## Usage

1.Install `ngx-cleave-directive`.

```bash
npm i -S ngx-cleave-directive
```

2.Import `NgxCleaveDirectiveModule` to your Angular module.

**Angular 4**

```typescript
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive/src';
@NgModule({
  imports: [
    ...
    NgxCleaveDirectiveModule,
    ...
  ],
  ...
```

**Angular 5+**

```typescript
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
@NgModule({
  imports: [
    ...
    NgxCleaveDirectiveModule,
    ...
  ],
  ...
```

3.Add the "cleave" attribute to an input element and bind it with a legal cleave.js option.

```html
<input type="text" ... [cleave]="{creditCard: true}">
```

For more details, please refer to [cleave.js official site](https://nosir.github.io/cleave.js/).

---
Good luck.
