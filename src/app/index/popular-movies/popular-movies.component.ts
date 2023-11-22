import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/api-config.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit {
  movies: any[] = [];
  url_img_movie = "https://image.tmdb.org/t/p/original";

  constructor(private apiConfig: ApiConfigService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.apiConfig
      .getMoviesFromApi()
      .subscribe((data) => (this.movies = data.results));
    // .subscribe((data) => console.log(data.results));
  }
}
