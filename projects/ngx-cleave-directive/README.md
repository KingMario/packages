# Angular Cleave Directive

This directive integrates `cleave.js` into Angular Form.

It uses `cleave.js` to Format input text content when you are typing.

It updates the model with `cleave.js` formatted value or raw value by patching the viewToModelUpdate method of the
NgControl object.

The directive works with Angular 13+.

## Usage

1.Install `cleave.js`, `ngx-cleave-directive` and `@types/cleave.js`.

```bash
npm i -S cleave.js ngx-cleave-directive
npm i -D @types/cleave.js
```

2.Import `NgxCleaveDirectiveModule` to your Angular module.

```typescript
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

@NgModule({
  imports: [
    // ...
    NgxCleaveDirectiveModule,
    // ...
  ],
  // ...
})
```

3.Add the `cleave` property to an input element or a textarea element and bind it with a legal cleave.js option.

```html
<input type="text" ... [cleave]="{creditCard: true}">
```

If you want to get the raw value instead of the formatted value, you should set the property `rawValue` to true.

```html
<input type="text" ... [cleave]="{numeral: true, numeralDecimalScale: 3}" [rawValue]=true>
```

**Note: The cleave directive should be used with one of the following form directives — ngModel, formControl or formControlName.**

4.Import any `cleave.js` addon if needed.

e.g.

```typescript
import 'cleave.js/dist/addons/cleave-phone.au-cn.js';
````

## Version Compatibility

| Cleave.js     | ngx-cleave-directive | Angular |
|---------------|----------------------|---------|
| 1.3.7 ~ 1.5.0 | 1.0.x                | 4.x     |
| 1.5.1 ~ 1.5.1 | 1.1.x                | 5.x     |
| 1.6.0+        | 2.0.x                | 5.x     |
|               | 2.1.x                | 13.x    |

For more details, please refer to [cleave.js official site](https://nosir.github.io/cleave.js/).

## Version History

* 2.1.0 Mechanism Update: use the viewToModelUpdate method of NgControl
* 2.0.0 Ivy Compatibility
* 1.1 Cleave 1.5.1+ Compatibility
* 1.0 Initial Version

---
Good luck.
