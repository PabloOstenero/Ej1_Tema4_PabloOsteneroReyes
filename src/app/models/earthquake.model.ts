// Modelo simplificado según la API de USGS GeoJSON
// Ejemplo de endpoint usado: https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&orderby=time&limit=1

export interface EarthquakeApiResponse {
  type: string;
  metadata?: {
    generated?: number;
    url?: string;
    title?: string;
    status?: number;
    api?: string;
    count?: number;
  };
  features: EarthquakeFeature[];
  bbox?: number[];
}

export interface EarthquakeFeature {
  type: 'Feature';
  properties: {
    mag?: number;
    place?: string;
    time?: number;
    updated?: number;
    tz?: number | null;
    url?: string;
    detail?: string;
    felt?: number | null;
    cdi?: number | null;
    mmi?: number | null;
    alert?: string | null;
    status?: string;
    tsunami?: number; // 0 o 1
    sig?: number;
    net?: string;
    code?: string;
    ids?: string;
    sources?: string;
    types?: string;
    nst?: number | null;
    dmin?: number | null;
    rms?: number | null;
    gap?: number | null;
    magType?: string;
    type?: string;
    title?: string;
  };
  geometry: {
    type: 'Point';
    // [longitud, latitud, profundidad_km]
    coordinates: [number, number, number];
  };
  id: string;
}