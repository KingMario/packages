import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxLowerCaseDirectiveModule } from 'ngx-lower-case-directive';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LowerCaseSampleComponent } from './lower-case-sample/lower-case-sample.component';
import { TrimSampleComponent } from './trim-sample/trim-sample.component';
import { UpperCaseSampleComponent } from './upper-case-sample/upper-case-sample.component';
import { CleaveSampleComponent } from './cleave-sample/cleave-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    LowerCaseSampleComponent,
    TrimSampleComponent,
    UpperCaseSampleComponent,
    CleaveSampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    NgxLowerCaseDirectiveModule,
    NgxTrimDirectiveModule,
    NgxUpperCaseDirectiveModule,
    NgxCleaveDirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
