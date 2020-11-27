import { ComponentFixture, TestBed } from '@angular/core/testing';

import { electrodomesticoListComponent } from "./electrodomesticoListComponent";

describe('ElectrodomesticoListComponent', () => {
  let component: electrodomesticoListComponent;
  let fixture: ComponentFixture<electrodomesticoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ electrodomesticoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(electrodomesticoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
