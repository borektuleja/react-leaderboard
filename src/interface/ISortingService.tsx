export type SortingOrder = "ascending" | "descending";

export interface ISortingService<T extends Object> {
    sort(records: T[], key: keyof T, order: SortingOrder): T[];
}
