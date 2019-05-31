import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HowToComponent } from './how-to/how-to.component';
import { ExamplesComponent } from './examples/examples.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HowToComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
