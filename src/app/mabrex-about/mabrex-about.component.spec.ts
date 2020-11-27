import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MabrexAboutComponent } from './mabrex-about.component';

describe('MabrexAboutComponent', () => {
  let component: MabrexAboutComponent;
  let fixture: ComponentFixture<MabrexAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MabrexAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MabrexAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
