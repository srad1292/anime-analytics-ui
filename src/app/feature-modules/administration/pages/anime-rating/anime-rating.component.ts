import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AnimeRating } from '../../models/anime-rating';
import { AdministrationService } from '../../services/administration.service';

@Component({
  selector: 'app-anime-rating',
  templateUrl: './anime-rating.component.html',
  styleUrls: ['./anime-rating.component.scss']
})
export class AnimeRatingComponent implements OnInit {

  rating: AnimeRating;
  ratingOptions: number[];
  form: FormGroup;


  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _adminService: AdministrationService,
  ) { }

  ngOnInit(): void {
    this.ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let ratings: AnimeRating[] = this._activatedRoute.snapshot.data.animeRatings;
    console.log({ratings});
    if(ratings && ratings.length) {
      this.rating = ratings[0];
      const today: Date = this.rating.animeListFinishedDate ? new Date(this.rating.animeListFinishedDate) : new Date();
      this.form = new FormGroup({
        'ratingScore': new FormControl(this.rating.animeListScore, [Validators.required]),
        'finishedDate': new FormControl(this.rating.animeListFinishedDate, [Validators.required]),
      });

      console.log(this.form.value);
    }
  }

  saveNewRating(): void {
    if(this.form.invalid) {
      alert("Form is not valid");
    }
    this.rating.animeListStatus = 2;
    this.rating.animeListStatusName = "Completed";
    this.rating.animeListScore = parseInt(this.form.value.ratingScore);
    let finishedIsoDate: string = new Date(this.form.value.finishedDate).toISOString();
    let finishedDate = finishedIsoDate.split("T")[0];
    this.rating.animeListFinishedDate = finishedDate;
    console.log("saving...");
    console.log(this.rating);
    this._adminService.saveAnimeRating(this.rating)
    .pipe(take(1))
    .subscribe((result: AnimeRating) => {
      if(!!result) {
        this._router.navigate(['/administration/search']);
        alert("Rating Saved.");
      } else {
        alert("Anime failed to save");
      }
    });
  }

}
