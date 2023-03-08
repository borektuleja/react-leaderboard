export interface ITableCellProps {
    value: any;
}

export function TableCell({value}: ITableCellProps): JSX.Element {
    // Render the component
    return (
        <td>{value}</td>
    );
}
