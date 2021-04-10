import { AnimeAired } from "./anime-aired";
import { AnimeRelated } from "./anime-related";
import { MalItem } from "./mal-item";

export interface Anime {    
    malId: Number;    
    url: string;    
    imageUrl?: string;    
    trailerUrl?: string;    
    title: string;    
    titleEnglish?: string;    
    titleJapanese: string;    
    titleSynonyms: string;    
    type: string;    
    source: string;    
    episodes: number;    
    status: string;    
    airing: boolean;    
    aired: AnimeAired;    
    duration: string;    
    rating: string;    
    score: number;    
    scoredBy: number;    
    rank: number;    
    popularity: number;    
    members: number;    
    favorites: number;    
    synopsis: string;    
    background?: string;    
    premiered?: string;    
    broadcast?: string;    
    related?: AnimeRelated;    
    producers: MalItem[];    
    licensors: MalItem[];    
    studios: MalItem[];    
    genres: MalItem[];    
    openingThemes: string[];    
    endingThemes: string[];
}