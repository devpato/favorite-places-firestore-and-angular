import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from "./app.component";
import { PlacesListComponent } from "./places-list/places-list.component";
import { PlacesFormComponent } from "./places-form/places-form.component";
import { PlacesMapComponent } from "./places-map/places-map.component";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    PlacesListComponent,
    PlacesFormComponent,
    PlacesMapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
