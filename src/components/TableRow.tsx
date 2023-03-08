import { IOrderable } from "../interface/IOrderable";
import { ITableColumnConfiguration } from "./Table";
import { TableCell } from "./TableCell";

export interface ITableRowProps<T extends IOrderable> {
    item: T;
    columns: ITableColumnConfiguration<T>[];
}

export function TableRow<T extends IOrderable>({item, columns}: ITableRowProps<T>): JSX.Element {
    // Render the component
    return (
        <tr>
            {columns.map(({key}, index): JSX.Element => (
                <TableCell key={index} value={item[key]}/>
            ))}
        </tr>
    );
}
