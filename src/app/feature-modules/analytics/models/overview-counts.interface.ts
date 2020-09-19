export interface RatingCount {
    count: number;
    score: number;
}

export interface OverviewCounts {
    totalCount: number;
    ratedCount: number;
    averageRating: number;
    countsByRating: RatingCount[];
}