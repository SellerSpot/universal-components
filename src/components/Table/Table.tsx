import React, { ReactElement } from 'react';
import style from './Table.module.scss';
import { ITableProps } from './Table.types';
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
const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
        cursor: 'pointer',
    },
});

export const Table = (props: ITableProps): ReactElement => {
    const { body, headers, stickyHeader } = props;
    // creating class instance based on specified requirements
    const classes = useRowStyles();
    return (
        <TableContainer component={Paper}>
            <MUITable stickyHeader={stickyHeader}>
                <TableHead>
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
                </TableHead>
                {/* <TableBody>
                    {rowData.map((row, index) => {
                        return (
                            <>
                                <TableRow
                                    className={classes.root}
                                    key={'bodyRow' + index}
                                    onClick={bodyRowOnClick}
                                >
                                    {row.map((cell, index) => {
                                        return (
                                            <TableCell key={'bodyCell' + index}>
                                                {cell.content}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                                {isUndefined(row.collapsedContent) ? null : (
                                    <TableRow key={'bodyRowCollapsed' + index}></TableRow>
                                )}
                            </>
                        );
                    })}
                </TableBody> */}
            </MUITable>
        </TableContainer>
    );
};
