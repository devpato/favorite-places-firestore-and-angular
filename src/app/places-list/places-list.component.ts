import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from '../places.service';
import { map } from 'rxjs/operators';
import { Place } from '../place.model';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  @Input() places: Place[];
  constructor(private placesService: PlacesService) {}

  ngOnInit() {}

  onDelete(id: string) {
    this.placesService.deletePlace(id);
  }

  onUpdate(id: string, visited: boolean) {
    this.placesService.updatePlace(id, visited);
  }
}
