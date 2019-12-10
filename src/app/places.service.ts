import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Place } from './place.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  constructor(private firestore: AngularFirestore) {}

  firestorePlacesCollection = this.firestore.collection('places');

  places$ = this.firestorePlacesCollection.snapshotChanges().pipe(
    map(actions => {
      return actions.map(p => {
        const place = p.payload.doc;
        const id = place.id;
        return { id, ...place.data() } as Place;
      });
    })
  );

  async addPlace(data: Place): Promise<void> {
    try {
      this.firestorePlacesCollection.add(data);
    } catch (err) {
      console.log(err);
    }
  }

  async deletePlace(id: string): Promise<void> {
    try {
      await this.firestorePlacesCollection.doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  }

  async updatePlace(id: string, visited: boolean): Promise<void> {
    try {
      await this.firestorePlacesCollection
        .doc(id)
        .set({ visited: !visited }, { merge: true });
    } catch (err) {
      console.log(err);
    }
  }
}
