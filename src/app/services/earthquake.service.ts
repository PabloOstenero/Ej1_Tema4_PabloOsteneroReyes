import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EarthquakeApiResponse, EarthquakeFeature } from '../models/earthquake.model';

@Injectable({ providedIn: 'root' })
export class EarthquakeService {
  // USGS: último terremoto; formato GeoJSON
  private readonly endpoint =
    'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&orderby=time&limit=1';

  constructor(private http: HttpClient) {}

  getLatestEarthquake(): Observable<EarthquakeFeature | null> {
    return this.http.get<EarthquakeApiResponse>(this.endpoint).pipe(
      map(resp => (resp?.features?.length ? resp.features[0] : null))
    );
  }
}