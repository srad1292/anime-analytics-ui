export interface OverviewCounts {
    totalCount: number;
    ratedCount: number;
    averageRating: number;
    countsByRating: {count: number, score: number}[]
}