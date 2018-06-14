# Angular Upper Case Directive

This directive helps to convert an input text value to upper case.

It lies on a simple fact that *Angular listens to `input` event to bring the view-to-model binding into being*.

The directive works with Angular 5 and 6. To use it in Angular 4, you may import the .ts file directly (see *Usage*). For Angular 2, you may try it in Angular 4's way, but it's not guaranteed to work.


## Usage

1.Install `ngx-upper-case-directive`.

```bash
npm i -S ngx-upper-case-directive
```

2.Import `NgxUpperCaseDirectiveModule` to your Angular module.

**Angular 4**

```typescript
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive/src';
@NgModule({
  imports: [
    ...
    NgxUpperCaseDirectiveModule,
    ...
  ],
  ...
```

**Angular 5+**

```typescript
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';
@NgModule({
  imports: [
    ...
    NgxUpperCaseDirectiveModule,
    ...
  ],
  ...
```

3.Add the "upperCase" attribute to an input element.

```html
<input type="text" ... upperCase>
```

4.If you want to convert the value ONLY on blur event, you should set the value of upperCase attribute to `blur`.

```html
<input type="text" ... upperCase="blur">
```

---
Good luck.
