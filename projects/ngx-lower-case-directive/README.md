# Angular Lower Case Directive

This directive helps to convert an input text value to lower case.

It lies on a simple fact that *Angular listens to `input` event to bring the view-to-model binding into being*.

The directive works with Angular 5 and 6. To use it in Angular 4, you may import the .ts file directly (see *Usage*). For Angular 2, you may try it in Angular 4's way, but it's not guaranteed to work.


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
