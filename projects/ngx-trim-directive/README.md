# Angular Trim Directive

This directive helps to trim whitespaces of an input text value.

It lies on a simple fact that *Angular listens to `input` event to bring the view-to-model binding into being*.

The directive works with Angular 5 and 6. To use it in Angular 4, you may import the .ts file directly (see *Usage*). For Angular 2, you may try it in Angular 4's way, but it's not guaranteed to work.


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

3.Add the "trim" attribute to an input element.

```html
<input type="text" ... trim>
```

4.If you want to trim the value ONLY on blur event, you should set the value of trim attribute to `blur`. This is very handy if a whitespace is allowed inside the input text value.

```html
<input type="text" ... trim="blur">
```

---
Good luck.
