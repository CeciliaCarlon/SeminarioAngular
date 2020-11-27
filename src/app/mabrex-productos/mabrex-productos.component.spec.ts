import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MabrexProductosComponent } from './mabrex-productos.component';

describe('MabrexProductosComponent', () => {
  let component: MabrexProductosComponent;
  let fixture: ComponentFixture<MabrexProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MabrexProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MabrexProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
