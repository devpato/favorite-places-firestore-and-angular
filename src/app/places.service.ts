import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Place } from './place.model';

import { map, catchError, take, finalize } from 'rxjs/operators';
import { from, of } from 'rxjs';
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

  addPlace(data: Place): void {
    from(this.firestorePlacesCollection.add(data))
      .pipe(take(1))
      .subscribe(res => {
        console.log(res);
      });
  }

  deletePlace(id: string): void {
    from(this.firestorePlacesCollection.doc(id).delete())
      .pipe(
        take(1),
        finalize(() => console.log('complete!'))
      )
      .subscribe(
        success => console.log('success!'),
        error => console.log('error!')
      );
  }

  updatePlace(id: string, visited: boolean): void {
    from(
      this.firestorePlacesCollection
        .doc(id)
        .set({ visited: !visited }, { merge: true })
    )
      .pipe(
        take(1),
        finalize(() => console.log('complete!'))
      )
      .subscribe(
        success => console.log('success!'),
        error => console.log('error!')
      );
  }
}
