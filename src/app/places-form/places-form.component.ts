import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { PlacesService } from "../places.service";

@Component({
  selector: "app-places-form",
  templateUrl: "./places-form.component.html",
  styleUrls: ["./places-form.component.scss"]
})
export class PlacesFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(""),
    long: new FormControl(""),
    lat: new FormControl("")
  });
  constructor(private placesService: PlacesService) {}

  ngOnInit() {}
}
