import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesFormComponent } from './places-form/places-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesListComponent,
    PlacesFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
