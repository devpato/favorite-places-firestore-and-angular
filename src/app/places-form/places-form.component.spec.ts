import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesFormComponent } from './places-form.component';

describe('PlacesFormComponent', () => {
  let component: PlacesFormComponent;
  let fixture: ComponentFixture<PlacesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
