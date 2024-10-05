import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetThreedeeComponent } from './planet-threedee.component';

describe('PlanetThreedeeComponent', () => {
  let component: PlanetThreedeeComponent;
  let fixture: ComponentFixture<PlanetThreedeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetThreedeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetThreedeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
