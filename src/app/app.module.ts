import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirePerformanceModule } from "@angular/fire/performance";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AgmCoreModule } from "@agm/core";

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
    AngularFirestoreModule,
    AngularFirePerformanceModule,
    AgmCoreModule.forRoot({
      apiKey: "XXXXXXXXXX"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
