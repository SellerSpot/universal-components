import { TableCellProps, TableProps } from '@material-ui/core';
import { ReactNode } from 'react';

export interface ITableCell {
    width?: TableCellProps['width'];
    padding?: TableCellProps['padding'];
    align?: TableCellProps['align'];
    content?: ReactNode;
    colSpan?: number;
    rowSpan?: number;
}

export interface ITableBody {
    rowData: ITableCell[][];
    collapsedContent?: ReactNode;
}

export interface ITableProps {
    stickyHeader?: boolean;
    size?: TableProps['size'];
    multiExpandableRows?: boolean;
    headers?: ITableCell[];
    body?: ITableBody;
}
