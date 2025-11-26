import { Routes } from '@angular/router';
import { EarthquakesComponent } from './components/earthquakes/earthquake.component';
import { RenderApiComponent } from './components/render-api/render-api.component';

export const routes: Routes = [
  { path: '', redirectTo: 'terremotos', pathMatch: 'full' },
  { path: 'terremotos', component: EarthquakesComponent, title: 'Último terremoto' },
  { path: 'api', component: RenderApiComponent, title: 'API Render' },
  { path: '**', redirectTo: 'terremotos' },
];