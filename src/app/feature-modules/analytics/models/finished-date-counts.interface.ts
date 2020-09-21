export interface FinishedYearCount {
    count: number;
    totalRating: number;
    average: number;
    year: string;
}

export interface FinishedYearCounts {
    finishedYear: FinishedYearCount[];
}