import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFirePerformance } from "@angular/fire/performance";
import { Place } from "./place.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  constructor(
    private perf: AngularFirePerformance,
    private firestore: AngularFirestore
  ) {}

  firestorePlacesCollection = this.firestore.collection("places");

  //READ
  places$ = this.firestorePlacesCollection.snapshotChanges().pipe(
    this.perf.trace("placesQuery"),
    map(actions => {
      return actions.map(p => {
        const place = p.payload.doc;
        const id = place.id;
        return { id, ...place.data() } as Place;
      });
    })
  );

  //CREATE
  async addPlace(data: Place): Promise<void> {
    try {
      this.firestorePlacesCollection.add(data);
    } catch (err) {
      console.log(err);
    }
  }

  //UPDATE
  async updatePlace(id: string, visited: boolean): Promise<void> {
    try {
      await this.firestorePlacesCollection
        .doc(id)
        .set({ visited: !visited }, { merge: true });
    } catch (err) {
      console.log(err);
    }
  }

  //DELETE
  async deletePlace(id: string): Promise<void> {
    try {
      await this.firestorePlacesCollection.doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  }
}
