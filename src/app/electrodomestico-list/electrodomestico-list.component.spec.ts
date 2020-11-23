import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodomesticoListComponent } from './electrodomestico-list.component';

describe('ElectrodomesticoListComponent', () => {
  let component: ElectrodomesticoListComponent;
  let fixture: ComponentFixture<ElectrodomesticoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectrodomesticoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrodomesticoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
