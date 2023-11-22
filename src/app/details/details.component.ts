import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from '../api-config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  url_img_movie = 'https://image.tmdb.org/t/p/original';
  detailsId: any;
  detailsTitle: any;
  detailsOverview: any;
  detailsPicture: any;
  detailsDate: any;
  detailsRuntime: any;
  detailsVote: any;
  detailsAll: any;

  // id = this.url.snapshot.paramMap.get('id');

  // id = this.url.paramMap.subscribe(params => console.log(params.get('id')));

  constructor(private apiConfig: ApiConfigService, public url: ActivatedRoute) {
    // console.log(this.id);
  }

  ngOnInit(): void {
    const id: any = this.url.snapshot.paramMap.get('id');
    this.getDetailsAllInfos(id);
    // console.log(this.id);
    // this.getTestAll();
  }

  // getTestAll() {
  //   this.apiConfig
  //     .getDetailsFromApi()
  //     .subscribe((data) => (this.detailsAll = data));
  //   // .subscribe((data) => console.log(data.id));
  // }

  getDetailsAllInfos(id: any) {
    this.apiConfig
      .getDetailsFromApi(id)
      // .subscribe((data) => this.detailsAll.push({ id: data.id }));
      .subscribe((data) => (this.detailsId = data.id));
    // .subscribe((data) => console.log(data));
    this.apiConfig
      .getDetailsFromApi(id)
      // .subscribe((data) => this.detailsAll.push({ title: data.id }));
      .subscribe((data) => (this.detailsTitle = data.original_title));
    this.apiConfig
      .getDetailsFromApi(id)
      .subscribe((data) => (this.detailsOverview = data.overview));
    this.apiConfig
      .getDetailsFromApi(id)
      .subscribe((data) => (this.detailsPicture = data.poster_path));
    this.apiConfig
      .getDetailsFromApi(id)
      .subscribe((data) => (this.detailsDate = data.release_date));
    this.apiConfig
      .getDetailsFromApi(id)
      .subscribe((data) => (this.detailsRuntime = data.runtime));
    this.apiConfig
      .getDetailsFromApi(id)
      .subscribe((data) => (this.detailsVote = data.vote_average));
  }
}
