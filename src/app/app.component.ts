import { Component, OnInit } from "@angular/core";
import { PlacesService } from "./places.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFirePerformance } from "@angular/fire/performance";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "This Dot app";

  constructor(
    private placesService: PlacesService,
    private pref: AngularFirePerformance,
    private db: AngularFirestore
  ) {}
  places$ = this.placesService.places$;

  async loadPlacesData() {
    const perf = await this.pref.performance.toPromise();
    const trace = perf.trace("queryTotalTrace");
    const places = await this.db
      .collection("places")
      .get()
      .toPromise();
    trace.incrementMetric("totalPlaces", places.size);
    trace.stop();
  }
}
