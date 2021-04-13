import React, { ReactElement } from 'react';
import style from './Table.module.scss';
import { ITableCell, ITableProps } from './Table.types';
import {
    makeStyles,
    Paper,
    Table as MUITable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
export { ITableProps } from './Table.types';

// styling for the body row of table
const customRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
        cursor: 'pointer',
    },
});

export const Table = (props: ITableProps): ReactElement => {
    const { body, headers, stickyHeader, size } = props;
    const { rowData, collapseContent, collapsedContent } = body;
    // getting custom classes from rowStyles
    const classes = customRowStyles();

    // contructs the cells for the main table
    const tableRowCells = (row: ITableCell[]) => {
        return row.map((cell, index) => {
            const { align, content, padding, width } = cell;
            return (
                <TableCell key={'tableCell' + index} align={align} padding={padding} width={width}>
                    {content}
                </TableCell>
            );
        });
    };

    // constructs the body for the table
    const tableBody = rowData.map((row, index) => {
        return <TableRow key={'tableRow' + index}>{tableRowCells(row)}</TableRow>;
    });

    // contructs the header for the main table
    const tableHeader = (
        <TableRow>
            {headers.map((header, index) => {
                return (
                    <TableCell
                        key={'tableHeader' + index}
                        padding={header.padding}
                        align={header.align}
                        width={header.width}
                    >
                        {header.content}
                    </TableCell>
                );
            })}
        </TableRow>
    );

    return (
        <TableContainer component={Paper}>
            <MUITable stickyHeader={stickyHeader} size={size}>
                <TableHead>{tableHeader}</TableHead>
                <TableBody>{tableBody}</TableBody>
            </MUITable>
        </TableContainer>
    );
};
