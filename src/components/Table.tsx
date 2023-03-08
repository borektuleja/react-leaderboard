import "./Table.scss";
import { IRepository } from "../interface/IRepository";
import { useEffect, useState } from "react";
import { TableRow } from "./TableRow";
import { ISortingService, SortingOrder } from "../interface/ISortingService";
import { IOrderable } from "../interface/IOrderable";
import { FaSortDown, FaSortUp } from "react-icons/fa";

export interface ITableColumnConfiguration<T extends IOrderable> {
    key: keyof T;
    header: string;
}

export interface ITableProps<T extends IOrderable> {
    repository: IRepository<T>;
    sortingService: ISortingService<T>;
    columns: ITableColumnConfiguration<T>[];
}

export function Table<T extends IOrderable>({repository, sortingService, columns}: ITableProps<T>): JSX.Element {
    // Define component state
    const [records, setRecords] = useState<T[]>([]);
    const [currentKey, setCurrentKey] = useState<keyof T>("ID");
    const [currentOrder, setCurrentOrder] = useState<SortingOrder>("ascending");

    // Retrive data when the component is mounted
    useEffect((): void => {
        setRecords(sortingService.sort(repository.getRecords(), currentKey, currentOrder));
    }, []);

    // A function triggered from the UI to perform sorting of data
    const sort = (key: keyof T): void => {
        // Determine the sorting order
        const order: SortingOrder = (currentKey !== key) ? "ascending" : (
            (currentOrder === "ascending") ? "descending" : "ascending"
        );

        // Call the sorting service
        setRecords(sortingService.sort(records, key, order));
        setCurrentKey(key);
        setCurrentOrder(order);
    }

    // Render the component
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map(({key, header}, index): JSX.Element => (
                        <th key={index} onClick={(): void => sort(key)}>
                            <span>{header}</span>
                            {(currentKey === key) && ((currentOrder === "ascending") ? <FaSortDown/> : <FaSortUp/>)}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {records.map((item): JSX.Element => (
                    <TableRow<T> key={item.ID} item={item} columns={columns}/>
                ))}
            </tbody>
        </table>
    );
}
