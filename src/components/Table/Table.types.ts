import { ReactElement, ReactNode } from 'react';
import { TableCellProps, TableProps } from '@material-ui/core';

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
    collapsedContent?: ReactElement;
}

export interface ITableBodyProps {
    bodyData: ITableRow[];
    mainRowClassName: string;
    hasExpandableRows: boolean;
    expandedRowsSet: Set<number>;
    handleRowExpansionCallback: (rowIndex: number) => void;
}

export interface ITableProps {
    stickyHeader?: boolean;
    size?: TableProps['size'];
    multiExpandableRows?: boolean;
    hasExpandableRows?: boolean;
    headers?: ITableCell[];
    body: (props: { toggleRowExpansion: (rowIndex: number) => void }) => ITableRow[];
}
