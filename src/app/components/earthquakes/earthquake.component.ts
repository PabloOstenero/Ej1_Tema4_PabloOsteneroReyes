import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EarthquakeService } from '../../services/earthquake.service';
import { EarthquakeFeature } from '../../models/earthquake.model';

@Component({
  standalone: true,
  selector: 'app-earthquakes',
  imports: [CommonModule, DatePipe],
  templateUrl: './earthquake.component.html',
})
export class EarthquakesComponent {
  loading = false;
  error = '';
  latest: EarthquakeFeature | null = null;

  constructor(private eqService: EarthquakeService) {}

  cargarUltimo(): void {
    this.loading = true;
    this.error = '';
    this.latest = null;

    this.eqService.getLatestEarthquake().subscribe({
      next: (feature) => {
        this.latest = feature;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo cargar la información del último terremoto.';
        this.loading = false;
      }
    });
  }

  toDate(ms?: number): Date | null {
    return typeof ms === 'number' ? new Date(ms) : null;
  }
}