import { TableCellProps, TableProps } from '@material-ui/core';

export interface ITableCell {
    width?: TableCellProps['width'];
    padding?: TableCellProps['padding'];
    align?: TableCellProps['align'];
    content?: TableCellProps['children'];
}

export interface ITableBody {
    rowData: ITableCell[][];
    collapsedContent?: TableCellProps['children'];
    collapseContent?: boolean;
}

export interface ITableProps {
    stickyHeader?: boolean;
    size?: TableProps['size'];
    headers?: ITableCell[];
    body?: ITableBody;
}
