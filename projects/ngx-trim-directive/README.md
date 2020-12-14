# Angular Trim Directive

This directive helps to trim whitespaces of an input text value.

It lies on a simple fact that *Angular listens to `input` event to bring the view-to-model binding into being*.

_* According to the description of [updateOn property of AbstractControlOptions interface](https://angular.io/api/forms/AbstractControlOptions), when updateOn is set to `blur` or `submit`, Angular listens to `blur` or `submit` event for model update. In this directive, `update-on-blur` case is handled in a hack way. No further processing is required for `update-on-submit` case._

Since extra `input` and `blur` events are dispatched, if you bind a callback to `input` event or `blur` event, the callback will be invoked twice on `input` or `blur`.

To overcome the disadvantage, a debounced function is recommended for the event binding.

The directive works with Angular 5+.

## Usage

1.Install `ngx-trim-directive`.

```bash
npm i -S ngx-trim-directive
```

2.Import `NgxTrimDirectiveModule` to your Angular module.

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

Generally, the input value will be trimmed automatically whenever the bound model is initiated or is updated programmatically. There is a boolean trimOnWriteValue property to switch this behavior `on` or `off`. The default value of this property, if omitted, is true, which means the functionality is on. You can turn the functionality off by setting the `trimOnWriteValue` property to false.

```html
<input type="text" ... trim [trimOnWriteValue]="false">
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

## Version History

*1.1.0 Remove Angular 4 support
* 1.0.11 [#13](https://github.com/KingMario/packages/issues/13) bug fixed, thanks for the contribution from [Timo Peter <img src="https://avatars3.githubusercontent.com/u/16336536?s=46&v=4" height="20" width="20">](https://github.com/tpeter1985)
* 1.0.10 minor update to keep non-string model untouched
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

## Contributors

Thank you all for your contribution to this directive!

[<img src="https://avatars3.githubusercontent.com/u/3956876?s=40&v=4" height="20" width="20">](https://github.com/kingmario) [<img src="https://avatars3.githubusercontent.com/u/16336536?s=40&v=4" height="20" width="20">](https://github.com/tpeter1985)

---
Good luck.
