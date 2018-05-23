import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';

import { AppComponent } from './app.component';
import { TrimSampleComponent } from './trim-sample/trim-sample.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TrimSampleComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    AppRoutingModule,
    NgxTrimDirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
