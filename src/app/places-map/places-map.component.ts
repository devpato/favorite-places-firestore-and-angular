import { Component, OnInit, Input } from "@angular/core";
import { Place } from "../place.model";

@Component({
  selector: "app-places-map",
  templateUrl: "./places-map.component.html",
  styleUrls: ["./places-map.component.scss"]
})
export class PlacesMapComponent implements OnInit {
  @Input() places: Place[];

  //This will define the center of the map

  constructor() {}

  ngOnInit() {}
}
