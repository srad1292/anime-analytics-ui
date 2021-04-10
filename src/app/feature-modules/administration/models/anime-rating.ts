import { Anime } from "./anime.dto";

export interface AnimeRating extends Anime {
    
    ratingId: string;
    animeListStatus: number;
    animeListStatusName: string;
    animeListScore: number;
    animeListFinishedDate: string;
}