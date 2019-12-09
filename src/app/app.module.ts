import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PlacesListComponent } from "./places-list/places-list.component";
import { PlacesFormComponent } from "./places-form/places-form.component";
import { PlacesMapComponent } from "./places-map/places-map.component";

@NgModule({
  declarations: [
    AppComponent,
    PlacesListComponent,
    PlacesFormComponent,
    PlacesMapComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
