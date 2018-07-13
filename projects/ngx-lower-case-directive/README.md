# Angular Lower Case Directive

This directive helps to convert an input text value to lower case.

It lies on a simple fact that *Angular listens to `input` event to bring the view-to-model binding into being*.

_* According to the description of [updateOn property of AbstractControlOptions interface](https://angular.io/api/forms/AbstractControlOptions), when updateOn is set to `blur` or `submit`, Angular listens to `blur` or `submit` event for model update. In this directive, `update-on-blur` case is handled in a hack way. No further processing is required for `update-on-submit` case._

Since extra `input` and `blur` events are dispatched, if you bind a callback to `input` event or `blur` event, the callback will be invoked twice on `input` or `blur`.

To overcome the disadvantage, a debounced function is recommended for the event binding.

The directive works with Angular 5 and 6. To use it in Angular 4, you may import the .ts file directly (see *Usage*). For Angular 2, you may try it in Angular 4's way, but it's not tested.


## Usage

1.Install `ngx-lower-case-directive`.

```bash
npm i -S ngx-lower-case-directive
```

2.Import `NgxLowerCaseDirectiveModule` to your Angular module.

**Angular 4**

```typescript
import { NgxLowerCaseDirectiveModule } from 'ngx-lower-case-directive/src';
@NgModule({
  imports: [
    ...
    NgxLowerCaseDirectiveModule,
    ...
  ],
  ...
```

**Angular 5+**

```typescript
import { NgxLowerCaseDirectiveModule } from 'ngx-lower-case-directive';
@NgModule({
  imports: [
    ...
    NgxLowerCaseDirectiveModule,
    ...
  ],
  ...
```

3.Add the "lowerCase" attribute to an input element.

```html
<input type="text" ... lowerCase>
```

4.If you want to convert the value ONLY on blur event, you should set the value of lowerCase attribute to `blur`.

```html
<input type="text" ... lowerCase="blur">
```

---
Good luck.
