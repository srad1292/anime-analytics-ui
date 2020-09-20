import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreCounts, GenreCount } from '../../models/genre-counts.interface';
import { IBarGraphData } from 'src/app/graphs/models/bar-graph-data.interface';
import { getColors } from 'src/app/graphs/utils/get-colors.util';
import { BarYTicks } from 'src/app/graphs/models/bar-y-ticks.interface';
import { IDoughnutGraphData } from 'src/app/graphs/models/doughnut-graph-data.interface';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  genreData: GenreCounts;

  genreCountGraph: IBarGraphData;

  genreAverageGraph: IBarGraphData;

  genreFrequencyGraph: IDoughnutGraphData;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.genreData = this._activatedRoute.snapshot.data.genreData;
    const genres: GenreCount[] = this.genreData?.genres || [];
    
    this.genreCountGraph = this._buildCountOfGenreGraph(genres);
    this.genreAverageGraph = this._buildAverageRatingOfGenreGraph(genres);
    this.genreFrequencyGraph = this._buildFrequencyOfGenreGraph(genres);
  }
  
  private _buildCountOfGenreGraph(genres: GenreCount[]): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    genres.forEach((genre: GenreCount) => {
      labels.push(`${genre.name}`);
      values.push(genre.count);
    });

    return {
      labels,
      values,
      colors: getColors(labels),
      dataLabel: "Count of Anime"
    };
  }

  private _buildAverageRatingOfGenreGraph(genres: GenreCount[]): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    genres.forEach((genre: GenreCount) => {
      labels.push(`${genre.name}`);
      values.push(genre.average);
    });

    const yTicks: BarYTicks = {
      min: 0,
      max: 10,
      stepSize: 1
    };

    return {
      labels,
      values,
      colors: getColors(labels),
      dataLabel: "Average Rating",
      yTicks
    };
  }

  private _buildFrequencyOfGenreGraph(genres: GenreCount[]): IDoughnutGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    genres.forEach((genre: GenreCount) => {
      labels.push(`${genre.name}`);
      values.push(genre.count);
    });

    return {
      labels,
      values,
      colors: getColors(labels),
      dataLabel: "Frequency"
    };
  }
  

}
