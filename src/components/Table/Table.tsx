import {
    Table as MUITable,
    TableBody as MUITableBody,
    TableCell,
    TableHead as MUITableHead,
    TableRow,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import styles from './Table.module.scss';
import { ITableProps } from './Table.types';

export { ITableProps } from './Table.types';

const TableHead = (props: { shape: ITableProps['shape'] }) => {
    const { shape } = props;
    return (
        <MUITableHead>
            <TableRow>
                {shape.map((column, columnIndex) => {
                    // props
                    const { columnName, align, colSpan, padding, rowSpan, width } = column;

                    // compute
                    const cellKey = columnIndex;

                    // draw
                    return (
                        <TableCell
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
            </TableRow>
        </MUITableHead>
    );
};

const TableBody = (props: ITableProps) => {
    // props
    const { data, uniqueKey, shape } = props;

    // draw
    return (
        <MUITableBody>
            {data.map((rowData, rowIndex) => {
                // compute
                const rowKey = rowData[uniqueKey] ?? rowIndex;
                return (
                    <TableRow key={rowKey}>
                        {shape.map((column, columnIndex) => {
                            // props
                            const { customRenderer, dataKey } = column;
                            // compute
                            const cellContent =
                                customRenderer?.({
                                    columnIndex,
                                    rowIndex,
                                    rowData,
                                }) ?? rowData[dataKey];
                            return <TableCell key={columnIndex}>{cellContent}</TableCell>;
                        })}
                    </TableRow>
                );
            })}
        </MUITableBody>
    );
};

export const Table = (props: ITableProps): ReactElement => {
    const { shape } = props;
    return (
        <div className={styles.tableWrapper}>
            <MUITable>
                <TableHead shape={shape} />
                <TableBody {...props} />
            </MUITable>
        </div>
    );
};
