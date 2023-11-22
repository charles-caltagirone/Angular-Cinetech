import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from '../api-config.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  movies: any[] = [];
  series: any[] = [];
  url_img_media = 'https://image.tmdb.org/t/p/original/';

  constructor(private apiConfig: ApiConfigService) {}

  ngOnInit() {
    this.getMovies();
    this.getSeries();
  }

  getMovies() {
    this.apiConfig
      .getMoviesFromApi()
      .subscribe((data) => (this.movies = data.results));
    // .subscribe((data) => console.log(data.results));
  }

  getSeries(): void {
    this.apiConfig
      .getSeriesFromApi()
      .subscribe((data) => (this.series = data.results));
    // .subscribe((data) => console.log(data.results));
  }
}
