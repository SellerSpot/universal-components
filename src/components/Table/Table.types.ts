import { TableCellProps } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { ReactElement } from 'react';

type TObj = { [key: string]: unknown };

export type TTableCellCustomRenderer<T> = (props: {
    rowIndex?: number;
    columnIndex?: number;
    rowData?: T;
}) => ReactElement | number | string;
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
    customRenderer?: TTableCellCustomRenderer<T>;
    /**
     * when true, the click on this cell will not trigger the row expansion, event will only appicable to this cell
     * @default false
     */
    blockClickEventBubbling?: boolean;
}

export type ITableCollapsedCustomRenderer<T> = (props: {
    rowIndex?: number;
    rowData?: T;
    toggleRowExpansion?: (rowIndex: number) => void;
}) => ReactElement;

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
    size?: 'medium' | 'small';
    /**
     * Key of 'data' object to use as key for the table rows
     */
    uniqueKey?: keyof T;
    stickyHeader?: boolean;
    /**
     * Can multiple rows expand or can only one stay open at a time
     */
    multiRowExpansion?: boolean;
    isLoading?: boolean;
    emptyStateMessage?: string;
    emptyStatePrimaryCallToAction?: ReactElement;
    style?: {
        tableWrapper?: CSSProperties;
        headerRow?: {
            backgroundColor?: string;
        };
        collapsedRow?: {
            backgroundColor?: string;
        };
        bodyRow?: {
            backgroundColor?: string;
        };
    };
    collapsedContentRenderer?: ITableCollapsedCustomRenderer<T>;
    onRowClick?: (props: {
        event: React.MouseEvent<HTMLTableRowElement>;
        rowIndex: number;
    }) => void;
}
