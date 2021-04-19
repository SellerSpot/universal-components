import { TableCellProps, TableProps } from '@material-ui/core';
import { ReactElement, ReactNode } from 'react';

export interface ITableCell {
    width?: TableCellProps['width'];
    padding?: TableCellProps['padding'];
    align?: TableCellProps['align'];
    content?: ReactNode;
    colSpan?: number;
    rowSpan?: number;
}

export interface ITableRow {
    cells: ITableCell[];
    onClick?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    collapsedContent?: (handleRowExpansion: (rowIndex: number) => void) => ReactElement;
}

export interface ITableProps {
    stickyHeader?: boolean;
    size?: TableProps['size'];
    multiExpandableRows?: boolean;
    hasExpandableRows?: boolean;
    headers?: ITableCell[];
    body: ITableRow[];
}
