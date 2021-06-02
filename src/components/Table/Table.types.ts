import { TableCellProps } from '@material-ui/core';
import { ReactElement } from 'react';

type TObj = { [key: string]: unknown };
interface IShape<T = TObj> {
    columnName: string | ReactElement;
    width?: string | number;
    padding?: TableCellProps['padding'];
    align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
    colSpan?: number;
    rowSpan?: number;
    /**
     * Key to fetch data from the 'data' prop
     */
    dataKey?: keyof T;
    customRenderer?: (props: {
        rowIndex?: number;
        columnIndex?: number;
        rowData?: T;
    }) => ReactElement | number | string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ITableProps<T = TObj | any, K = T[]> {
    /**
     * Array of objects containing the data for the table
     */
    data: K;
    /**
     * Shape and custom properties for each column
     */
    shape: IShape<T>[];
    /**
     * Key of 'data' object to use as key for the table rows
     */
    uniqueKey?: keyof T;
    stickyHeader?: boolean;
    onRowClick?: (rowIndex: number) => void;
}
