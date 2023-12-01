import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  API_KEY: string = 'd626a3bd2b510176142a8c48fbc04b97';
  IMG_URL: string = 'https://image.tmdb.org/t/p/original';
  API_URL: string = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient, public url: ActivatedRoute) {}

  getMoviesFromApi(): Observable<any> {
    return this.http.get<any>(
      `${this.API_URL}movie/top_rated?api_key=${this.API_KEY}&language=fr-FR&page=1`
    );
  }
  getSeriesFromApi(): Observable<any> {
    return this.http.get<any>(
      `${this.API_URL}tv/top_rated?api_key=${this.API_KEY}&language=fr-FR&page=1`
    );
  }
  getDetailsFromApi(id: string, typeMedia: string): Observable<any> {
    return this.http.get<any>(
      `${this.API_URL}${typeMedia}/${id}?api_key=${this.API_KEY}&language=fr-FR`
    );
  }

  getCastingFromApi(id: string, typeMedia: string) {
    return this.http.get<any>(
      `${this.API_URL}${typeMedia}/${id}/credits?api_key=${this.API_KEY}&language=fr-FR`
    );
  }

  getSimilarFromApi(id: string, typeMedia: string) {
    return this.http.get<any>(
      `${this.API_URL}${typeMedia}/${id}/similar?api_key=${this.API_KEY}&language=fr-FR`
    );
  }
  getSearchFromApi(query: string) {
    return this.http.get<any>(
      `${this.API_URL}search/multi?api_key=${this.API_KEY}&language=fr-FR&page=1&query=${query}`
    );
  }
}
