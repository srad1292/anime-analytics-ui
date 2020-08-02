export interface OverviewRatingsPagination {
    paginate: boolean;
    records?: number;
    page?: number;
}


export const overviewRatingsPaginationDefault: OverviewRatingsPagination = {
    paginate: false
}