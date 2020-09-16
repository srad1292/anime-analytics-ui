import { Component, OnInit, Input } from '@angular/core';
import { OverviewRatings, OverviewAnimeRating } from '../../models/overview-ratings.interface';
import { PAGINATION_DEFAULTS } from '../../consts/pagination-defaults.const';

@Component({
  selector: 'app-highest-rated',
  templateUrl: './highest-rated.component.html',
  styleUrls: ['./highest-rated.component.scss']
})
export class HighestRatedComponent implements OnInit {

  @Input() highestRated: OverviewRatings;

  totalRatings: number;

  ratings: OverviewAnimeRating[];

  columns: string[] = [
    'Title', 'English Title', 'MAL Score', 'Episodes', 'Date Completed'
  ];

  pages: number;

  currentPage: number;

  disablePrevious: boolean;

  disableNext: boolean;

  constructor() { }

  ngOnInit(): void {
    this.totalRatings = this.highestRated?.count ? this.highestRated?.count : 0;
    this.ratings = !!this.highestRated?.data ? this.highestRated?.data : [];
    console.log({highestRated: this.highestRated});
    console.log({ratings: this.ratings})
    this.pages = Math.ceil(this.totalRatings / PAGINATION_DEFAULTS.records);
    this.currentPage = 1;
    this.disablePrevious = true;
    this.disableNext = !this.pages || this.currentPage === this.pages;
  }

  goToPreviousPage() {
    console.log('Prev Page');
    this.currentPage = this.currentPage - 1;
  }


  goToNextPage() {
    console.log('Next Page');
    this.currentPage = this.currentPage + 1;
  }

}
