# Angular Cleave Directive

This directive integrates cleave.js into Angular Form.

It lies on a simple fact that *Angular listens to `input` event to bring the view-to-model binding into being*.

_* According to the description of [updateOn property of AbstractControlOptions interface](https://angular.io/api/forms/AbstractControlOptions), when updateOn is set to `blur` or `submit`, Angular listens to `blur` or `submit` event for model update. In this directive, `update-on-blur` case is handled in a hack way. No further processing is required for `update-on-submit` case._

Since extra `input` and `blur` events are dispatched, if you bind a callback to `input` event or `blur` event, the callback will be invoked twice on `input` or `blur`.

To overcome the disadvantage, a debounced function is recommended for the event binding.

The directive works with Angular 5 and 6. To use it in Angular 4, you may import the .ts file directly (see *Usage*). For Angular 2, you may try it in Angular 4's way, but it's not tested.


## Usage

1.Install `cleave.js` and `ngx-cleave-directive`.

```bash
npm i -S cleave.js ngx-cleave-directive
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

3.Add the "cleave" attribute to an input element or a textarea element and bind it with a legal cleave.js option.

```html
<input type="text" ... [cleave]="{creditCard: true}">
```

4.Import any `cleave.js` addon if needed.

e.g.

```typescript
import 'cleave.js/dist/addons/cleave-phone.au-cn.js';
````

For more details, please refer to [cleave.js official site](https://nosir.github.io/cleave.js/).

---
Good luck.
