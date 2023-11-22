import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/api-config.service';

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.css'],
})
export class PopularSeriesComponent implements OnInit {
  series: any[] = [];
  url_img_serie = "https://image.tmdb.org/t/p/original/";

  constructor(private apiConfig: ApiConfigService) {}

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void {
    this.apiConfig
      .getSeriesFromApi()
      .subscribe((data) => (this.series = data.results));
    // .subscribe((data) => console.log(data.results));
  }
}
