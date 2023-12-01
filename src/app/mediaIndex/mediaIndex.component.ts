import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from '../api-config.service';

interface MediaData {
  data: any[];
  loading: boolean;
}

@Component({
  selector: 'app-media',
  templateUrl: './mediaIndex.component.html',
  styleUrls: ['./mediaIndex.component.css'],
})
export class MediaComponent implements OnInit {
  media: { movies: MediaData; series: MediaData } = {
    movies: { data: [], loading: true },
    series: { data: [], loading: true },
  };

  constructor(private apiConfig: ApiConfigService) {}

  ngOnInit(): void {
    this.getMovies();
    this.getSeries();
  }

  getMovies(): void {
    this.apiConfig.getMoviesFromApi().subscribe((data) => {
      this.media.movies.data = data.results;
      this.media.movies.loading = false;
    });
  }

  getSeries(): void {
    this.apiConfig.getSeriesFromApi().subscribe((data) => {
      this.media.series.data = data.results;
      this.media.series.loading = false;
    });
  }

  getVoteAverageRound(voteAverage: number) {
    return Math.round(voteAverage * 10) / 10;
  }

  getUrlImage(): string {
    return this.apiConfig.IMG_URL;
  }

  scrollRight(id: string) {
    const container = document.getElementById(id);
    container.scrollTo({
      left: container.scrollLeft + 500,
      behavior: 'smooth',
    });
  }

  scrollLeft(id: string) {
    const container = document.getElementById(id);
    container.scrollTo({
      left: container.scrollLeft - 500,
      behavior: 'smooth',
    });
  }
}
