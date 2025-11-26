import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-render-api',
  imports: [CommonModule, FormsModule],
  templateUrl: './render-api.component.html',
})
export class RenderApiComponent {
  loading = false;
  error = '';
  data: unknown = null;
  currentEndpoint = '';

  constructor(private http: HttpClient) {}

  cargarAutores(): void {
    this.cargarDeMiApi('/api/autores');
  }

  cargarLibros(): void {
    this.cargarDeMiApi('/api/libros');
  }

  private cargarDeMiApi(endpoint: string): void {
    this.loading = true;
    this.error = '';
    this.data = null;
    this.currentEndpoint = endpoint;

    const url = `${environment.apiBaseUrl}${endpoint}`;
    this.http.get(url).subscribe({
      next: (resp) => {
        this.data = resp;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = `No se pudo cargar la información desde tu API en Render. Endpoint: ${endpoint}`;
        this.loading = false;
      }
    });
  }
}