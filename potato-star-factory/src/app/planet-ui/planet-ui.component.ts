import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Square {
  planted: boolean;
  readyForHarvest: boolean;
  timerId?: any; // To store the timer ID
}

interface Continent {
  name: string;
  squares: Square[];
}
@Component({
  selector: 'app-planet-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-ui.component.html',
  styleUrl: './planet-ui.component.css',
})
export class PlanetUiComponent {
  continents: Continent[] = [
    {
      name: 'Continent 1',
      squares: Array(16)
        .fill(null)
        .map(() => ({ planted: false, readyForHarvest: false })), // 4x4 grid
    },
    {
      name: 'Continent 2',
      squares: Array(16)
        .fill(null)
        .map(() => ({ planted: false, readyForHarvest: false })), // 4x4 grid
    },
  ];

  potatoCounter: number = 0; // Counter for harvested potatoes
  voltagePerPotato: number = 0.5; // Voltage per potato

  plantPotato(continentName: string, index: number) {
    const continent = this.continents.find((c) => c.name === continentName);

    if (continent && !continent.squares[index].planted) {
      continent.squares[index].planted = true;

      // Start a timer for 10 seconds
      continent.squares[index].timerId = setTimeout(() => {
        continent.squares[index].readyForHarvest = true; // Mark as ready for harvest
      }, 10000); // 10 seconds in milliseconds

      console.log(`Planted potato on ${continentName} at index ${index}`);
    }
  }

  harvestPotato(continentName: string, index: number) {
    const continent = this.continents.find((c) => c.name === continentName);

    if (continent && continent.squares[index].readyForHarvest) {
      // Increase the potato counter
      this.potatoCounter++;
      continent.squares[index].readyForHarvest = false;
      continent.squares[index].planted = false;

      // Clear the timer to avoid memory leaks (if necessary)
      if (continent.squares[index].timerId) {
        clearTimeout(continent.squares[index].timerId);
        continent.squares[index].timerId = undefined; // Clear the timer ID
      }

      console.log(`Harvested potato from ${continentName} at index ${index}`);
    }
  }

  get totalVoltage(): number {
    return this.potatoCounter * this.voltagePerPotato; // Calculate total voltage
  }
}
