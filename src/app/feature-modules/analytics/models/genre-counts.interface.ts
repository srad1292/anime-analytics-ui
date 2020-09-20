export interface GenreCount {
    count: number;
    totalRating: number;
    average: number;
    name: string;
}

export interface GenreCounts {
    genres: GenreCount[];
}