import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from '../api-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  queryAll: any;
  constructor(private apiConfig: ApiConfigService) {}

  ngOnInit(): void {}

  onKeyUp(text: any) {
    let query = text.target.value;
    console.log(query);
    this.apiConfig.getSearchFromApi(query).subscribe((data) => {
      this.queryAll = data.results.slice(0, 10); // Limit the results to 10
    });
  }
}