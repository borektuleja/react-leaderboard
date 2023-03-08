export interface IRepository<T> {
    getRecords(): T[];
}
