import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlanetUiComponent } from "./planet-ui/planet-ui.component";
import { PlanetThreedeeComponent } from "./planet-threedee/planet-threedee.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlanetUiComponent, PlanetThreedeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'potato-star-factory';
}
