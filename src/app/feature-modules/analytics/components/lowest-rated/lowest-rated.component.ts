import { Component, OnInit, Input } from '@angular/core';
import { OverviewRatings, OverviewAnimeRating } from '../../models/overview-ratings.interface';
import { PAGINATION_DEFAULTS } from '../../consts/pagination-defaults.const';
import { OverviewRatingsPagination } from '../../models/overview-ratings-pagination.interface';
import { AnalyticsService } from '../../services/analytics.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-lowest-rated',
  templateUrl: './lowest-rated.component.html',
  styleUrls: ['./lowest-rated.component.scss']
})
export class LowestRatedComponent implements OnInit {

  @Input() lowestRated: OverviewRatings;

  totalRatings: number;

  ratings: OverviewAnimeRating[];

  columns: string[] = [
    'Title', 'English Title', 'MAL Score', 'Episodes', 'Date Completed'
  ];

  pages: number;

  currentPage: number;

  disablePrevious: boolean;

  disableNext: boolean;

  loadingRatings: boolean = false;

  constructor(private _analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    this.totalRatings = this.lowestRated?.count ? this.lowestRated?.count : 0;
    this.ratings = !!this.lowestRated?.data ? this.lowestRated?.data : [];
    console.log({lowestRated: this.lowestRated});
    console.log({ratings: this.ratings})
    this.pages = Math.ceil(this.totalRatings / PAGINATION_DEFAULTS.records);
    this.currentPage = 1;
    this.disablePrevious = true;
    this.disableNext = !this.pages || this.currentPage === this.pages;
  }

  goToPreviousPage() {
    console.log('Prev Page');
    this.currentPage = this.currentPage - 1;
    this._loadRatings();
  }


  goToNextPage() {
    console.log('Next Page');
    this.currentPage = this.currentPage + 1;
    this._loadRatings();
  }

  private _loadRatings() {
    this.loadingRatings = true;
    const options: OverviewRatingsPagination = {
      paginate: true,
      records: PAGINATION_DEFAULTS.records,
      page: this.currentPage,
    };

    this._analyticsService.getLowestRated(options)
    .pipe(take(1))
    .subscribe((lowestRated: OverviewRatings) => {
      this.loadingRatings = false;
      this.totalRatings = lowestRated?.count ? lowestRated?.count : 0;
      this.ratings = !!lowestRated?.data ? lowestRated?.data : [];
      this.pages = Math.ceil(this.totalRatings / PAGINATION_DEFAULTS.records);
      this.disablePrevious = this.currentPage === 1;
      this.disableNext = !this.pages || this.currentPage === this.pages;
    });
  }

}
