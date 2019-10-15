# Angular Trim Directive

This directive helps to trim whitespaces of an input text value.

It lies on a simple fact that *Angular listens to `input` event to bring the view-to-model binding into being*.

_* According to the description of [updateOn property of AbstractControlOptions interface](https://angular.io/api/forms/AbstractControlOptions), when updateOn is set to `blur` or `submit`, Angular listens to `blur` or `submit` event for model update. In this directive, `update-on-blur` case is handled in a hack way. No further processing is required for `update-on-submit` case._

Since extra `input` and `blur` events are dispatched, if you bind a callback to `input` event or `blur` event, the callback will be invoked twice on `input` or `blur`.

To overcome the disadvantage, a debounced function is recommended for the event binding.

The directive works with Angular 5 and 6. To use it in Angular 4, you may import the .ts file directly (see *Usage*). For Angular 2, you may try it in Angular 4's way, but it's not tested.


## Usage

1.Install `ngx-trim-directive`.

```bash
npm i -S ngx-trim-directive
```

2.Import `NgxTrimDirectiveModule` to your Angular module.

**Angular 4**

```typescript
import { NgxTrimDirectiveModule } from 'ngx-trim-directive/src';
@NgModule({
  imports: [
    ...
    NgxTrimDirectiveModule,
    ...
  ],
  ...
```

**Angular 5+**

```typescript
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
@NgModule({
  imports: [
    ...
    NgxTrimDirectiveModule,
    ...
  ],
  ...
```

3.Add the "trim" attribute to an input element or a textarea element.

```html
<input type="text" ... trim>
```

4.If you want to trim the value ONLY on blur event, you should set the value of trim attribute to `blur`. This is very handy if a whitespace is allowed inside the input text value.

```html
<input type="text" ... trim="blur">
```

5.You may turn trim off by binding false to the trim attribute

```html
<input type="text" ... [trim]="trimOption">
<button (click)="trimOption = ''">
  Trim on Input
</button>
<button (click)="trimOption = 'blur'">
  Trim on Blur
</button>
<button (click)="trimOption = false">
  Turn Trim Off
</button>
```

Where `trimOption` is a property of the component class

```typescript
trimOPtion: '' | 'blur' | false = '';
```

6.Version History

* 1.0.9 [#8](https://github.com/KingMario/packages/issues/8) trim not-a-function bug in writeValue fixed
* 1.0.8 [#7](https://github.com/KingMario/packages/issues/7) Angular 8 compatibility issue addressed
* 1.0.7 use NgControl DI to get the ValueAccessor
* 1.0.6 trim value after setValue of formControl, not initially trim value for `trim="blur"` or for ngModel bug fixed
* 1.0.5 [#5](https://github.com/KingMario/packages/issues/5) bug fixed
* 1.0.4 initially trim value, trim bound to false processed, some methods changed to static
* 1.0.3 textarea supported
* 1.0.2 readme improvements
* 1.0.1 `blur` updateOn option processed
* 1.0.0 stable version
* 0.0.2 simplify the getCaret way for IE
* 0.0.1 initial version

---
Good luck.
