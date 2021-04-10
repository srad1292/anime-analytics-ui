import { Component, OnInit } from '@angular/core';
import { AnimeSearchItem, AnimeSearchList } from '../../models/anime-search-list';
import { AdministrationService } from '../../services/administration.service';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.scss']
})
export class AnimeSearchComponent implements OnInit {

  animeTitleSearch: string;
  animeSearchResults: AnimeSearchItem[];
  totalPages: number;
  columns: string[];

  constructor(private _administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.columns = ["title", "synopsis", "score", "startDate", "endDate"];
    this.animeTitleSearch = "";
    this.animeSearchResults = [];
    this.totalPages = 0;
  }

  searchForAnime(): void {
    console.log(`Searching for: ${this.animeTitleSearch}`);
    this._administrationService.searchForAnime(this.animeTitleSearch, 1)
    .subscribe((searchResults: AnimeSearchList) => {
      this.animeSearchResults = searchResults?.anime || [];
      this.totalPages = searchResults?.totalPages || 0;
    });
  }

}
