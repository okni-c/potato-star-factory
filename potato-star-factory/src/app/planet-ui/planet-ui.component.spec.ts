import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetUiComponent } from './planet-ui.component';

describe('PlanetUiComponent', () => {
  let component: PlanetUiComponent;
  let fixture: ComponentFixture<PlanetUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
