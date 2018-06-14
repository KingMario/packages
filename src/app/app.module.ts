import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxLowerCaseDirectiveModule } from 'ngx-lower-case-directive';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LowerCaseSampleComponent } from './lower-case-sample/lower-case-sample.component';
import { TrimSampleComponent } from './trim-sample/trim-sample.component';
import { UpperCaseSampleComponent } from './upper-case-sample/upper-case-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    LowerCaseSampleComponent,
    TrimSampleComponent,
    UpperCaseSampleComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    AppRoutingModule,
    NgxLowerCaseDirectiveModule,
    NgxTrimDirectiveModule,
    NgxUpperCaseDirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
