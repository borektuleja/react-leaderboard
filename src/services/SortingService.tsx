import { ISortingService, SortingOrder } from "../interface/ISortingService";

export class SortingService<T extends Object> implements ISortingService<T> {
    public sort(records: T[], key: keyof T, order: SortingOrder): T[] {
        // Create a copy of the original data
        const copy: T[] = records.slice();

        // Calculate the sign to use for sorting based on the order parameter
        const sign: number = Number(order === "ascending") + Number(order === "descending") * (-1);

        // Perform data type based sorting
        return copy.sort(((a, b): number => {
            if (typeof a[key] === "string") {
                return (a[key] as string).localeCompare((b[key] as string)) * sign;
            } else if (typeof a[key] === "number") {
                return ((a[key] as number) - (b[key] as number)) * sign;
            } else {
                throw new Error("Trying to sort by a value of a unsupported data type.");
            }
        }));
    }
}
