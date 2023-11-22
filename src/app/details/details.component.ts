import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from '../api-config.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  detailsAll: any;
  similarList: any;
  castingListCrew: any;
  castingListCast: any;
  typeMedia: string;
  private routeSub: Subscription;

  constructor(
    private apiConfig: ApiConfigService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      // Récupérez le nouveau paramètre d'identifiant et actualisez vos données ici
      let id = params['id'];
      let typeMedia = params['type'];
      this.typeMedia = typeMedia;

      // Mettez à jour vos données en fonction du nouvel identifiant
      this.getDetailsAllInfos(id, typeMedia);
      if (typeMedia === 'tv' || typeMedia === 'movie') {
        this.getCasting(id, typeMedia);
        this.getSimilar(id, typeMedia);
      }
    });
  }

  // ngOnDestroy() {
  //   this.routeSub.unsubscribe();
  // }

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

  getCasting(id: string, typeMedia: string) {
    this.apiConfig.getCastingFromApi(id, typeMedia).subscribe((data) => {
      this.castingListCast = data.cast;
      this.castingListCrew = data.crew;
    });
    // .subscribe((data) => console.log(data.cast));
    // .subscribe((data) => console.log(data.cast));
  }

  getSimilar(id: string, typeMedia: string) {
    this.apiConfig
      .getSimilarFromApi(id, typeMedia)
      .subscribe((data) => (this.similarList = data.results));
    // .subscribe((data) => console.log(data.results));
  }

  getUrlImage(): string {
    return this.apiConfig.IMG_URL;
  }
}
