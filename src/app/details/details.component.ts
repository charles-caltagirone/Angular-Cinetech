import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from '../api-config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  detailsAll: any;

  constructor(
    private apiConfig: ApiConfigService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    const typeMedia: string = this.route.snapshot.paramMap.get('type');
    this.getDetailsAllInfos(id, typeMedia);
  }

  getDetailsAllInfos(id: string, typeMedia: string) {
    this.apiConfig
      .getDetailsFromApi(id, typeMedia)
      .subscribe((data) => (this.detailsAll = data));
    // .subscribe((data) => console.log(data));
  }

  getMediaInfo() {
    if (this.detailsAll.runtime) {
      return `Durée : ${this.detailsAll.runtime} minutes`;
    } else if (this.detailsAll.number_of_episodes) {
      return `Nombres Episodes : ${this.detailsAll.number_of_episodes}`;
    }
    return '';
  }
  
  getUrlImage(): string {
    return this.apiConfig.IMG_URL;
  }
}
