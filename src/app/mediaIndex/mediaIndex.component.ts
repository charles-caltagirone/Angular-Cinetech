import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from '../api-config.service';

@Component({
  selector: 'app-media',
  templateUrl: './mediaIndex.component.html',
  styleUrls: ['./mediaIndex.component.css'],
})
export class MediaComponent implements OnInit {
  movies: any[] = [];
  series: any[] = [];

  constructor(private apiConfig: ApiConfigService) {}

  ngOnInit(): void {
    this.getMovies();
    this.getSeries();
  }

  getMovies(): void {
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

  getVoteAverageRound(voteAverage: number) {
    return Math.round(voteAverage * 10) / 10;
  }

  getUrlImage(): string {
    return this.apiConfig.IMG_URL;
  }
}
