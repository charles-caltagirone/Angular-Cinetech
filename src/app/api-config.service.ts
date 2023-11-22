import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  API_KEY: string = 'd626a3bd2b510176142a8c48fbc04b97';
  IMG_URL = 'https://image.tmdb.org/t/p/original';
  API_URL = 'https://api.themoviedb.org/3/';

  API_POPULAR_MOVIES = `${this.API_URL}movie/popular?api_key=${this.API_KEY}&language=fr-FR&page=1`; // "&language=en-US" et "&page=1" optionnels
  API_POPULAR_SERIES = `${this.API_URL}tv/popular?api_key=${this.API_KEY}&language=fr-FR&page=1`; // "&language=en-US" et "&page=1" optionnels
  id: any;

  constructor(private http: HttpClient, public url: ActivatedRoute) {}

  getMoviesFromApi(): Observable<any> {
    return this.http.get<any>(this.API_POPULAR_MOVIES);
  }


  getTest(idClick: any) {
    idClick = this.id;
  }
  getSeriesFromApi(): Observable<any> {
    return this.http.get<any>(this.API_POPULAR_SERIES);
  }

  getDetailsFromApi(id: any): Observable<any> {
    return this.http
      .get<any>(
        `${this.API_URL}movie/${id}?api_key=${this.API_KEY}&language=fr-FR`
      )
      .pipe(
        tap((response) => console.log(response)),
        catchError((error) => {
          console.error(error);
          return of(null);
        })
      );
  }
}
