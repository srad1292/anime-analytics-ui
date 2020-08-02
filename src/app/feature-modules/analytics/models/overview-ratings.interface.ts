export interface OverviewAnimeRating {
    animeListFinishedDate: string;
    url: string;
    trailerUrl: string;
    title: string;
    titleEnglish: string;
    episodes: number,
    score: number
}

export interface OverviewRatings {
    rating: number;
    count: number;
    data: OverviewAnimeRating[];
}