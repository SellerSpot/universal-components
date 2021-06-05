import {
    Table as MUITable,
    TableCell,
    TableContainer,
    TableHead as MUITableHead,
    TableRow,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { TableBody } from './Components/TableBody';
import styles from './Table.module.scss';
import { ITableProps } from './Table.types';

export {
    ITableProps,
    ITableCollapsedCustomRenderer,
    TTableCellCustomRenderer,
} from './Table.types';

const TableHead = (props: ITableProps) => {
    // props
    const { shape, collapsedContentRenderer } = props;

    // compute
    const hasCollapsedContent = !!collapsedContentRenderer;

    // draw
    return (
        <MUITableHead>
            <TableRow className={styles.headerRow}>
                {hasCollapsedContent ? (
                    <TableCell
                        className={styles.headerCell}
                        key={'expandRowIconColumn'}
                        width="5%"
                    />
                ) : null}
                {shape.map((column, columnIndex) => {
                    // props
                    const { columnName, align, colSpan, padding, rowSpan, width } = column;

                    // compute
                    const cellKey = columnIndex;

                    // draw
                    return (
                        <TableCell
                            className={styles.headerCell}
                            key={cellKey}
                            align={align}
                            padding={padding}
                            rowSpan={rowSpan}
                            width={width}
                            colSpan={colSpan}
                        >
                            {columnName}
                        </TableCell>
                    );
                })}
                <hr className={styles.headerDivider} />
            </TableRow>
        </MUITableHead>
    );
};

export const Table = (props: ITableProps): ReactElement => {
    const { size } = props;
    // draw
    return (
        <div className={styles.tableWrapper}>
            <TableContainer>
                <MUITable size={size}>
                    <TableHead {...props} />
                    <TableBody {...props} />
                </MUITable>
            </TableContainer>
        </div>
    );
};
