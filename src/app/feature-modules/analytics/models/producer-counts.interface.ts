export interface ProducerCount {
    count: number;
    totalRating: number;
    average: number;
    name: string;
}

export interface ProducerCounts {
    producers: ProducerCount[];
}