export interface StudioCount {
    count: number;
    totalRating: number;
    average: number;
    name: string;
}

export interface StudioCounts {
    studios: StudioCount[];
}