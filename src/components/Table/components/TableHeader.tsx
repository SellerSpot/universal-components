import React, { ReactElement } from 'react';
import {
    TableHead as MUITableHead,
    TableRow as MUITableRow,
    TableCell as MUITableCell,
} from '@material-ui/core';
import { ITableCell } from '../Table.types';

export interface ITableHeaderProps {
    hasExpandableRows: boolean;
    headerCells: ITableCell[];
}

export const TableHeader = (props: ITableHeaderProps): ReactElement => {
    const { hasExpandableRows, headerCells } = props;
    return (
        <MUITableHead>
            <MUITableRow>
                {hasExpandableRows && <MUITableCell width={'10%'} />}
                {headerCells.map((headerCell, headerCellIndex) => {
                    const { align, colSpan, content, padding, rowSpan, width } = headerCell;
                    return (
                        <MUITableCell
                            key={headerCellIndex}
                            padding={padding}
                            align={align}
                            width={width}
                            rowSpan={rowSpan}
                            colSpan={colSpan}
                        >
                            {content}
                        </MUITableCell>
                    );
                })}
            </MUITableRow>
        </MUITableHead>
    );
};
