import { makeStyles, Paper, Table as MUITable, TableContainer } from '@material-ui/core';
import React, { ReactElement, useState } from 'react';
import { TableBody } from './components/TableBody';
import { TableHeader } from './components/TableHeader';
import { ITableProps } from './Table.types';
export { ITableCell, ITableProps, ITableRow } from './Table.types';

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
    const {
        body: bodyData,
        headers,
        stickyHeader,
        size,
        multiExpandableRows,
        hasExpandableRows,
    } = props;
    // state set to hold the expanded rows (if the rows can expand)
    const [expandedRowsSet, setExpandedRowsSet] = useState(new Set<number>());
    // getting custom classes row style depending on if the table is expandable
    const mainRowClassName = hasExpandableRows ? customRowStyles().root : '';

    // handles expanding or collapsing a table row
    const toggleRowExpansion = (rowIndex: number) => {
        // creating a new instance of the state to manipulate
        const expandedRowsSetLocal = new Set(expandedRowsSet);
        if (multiExpandableRows) {
            if (expandedRowsSetLocal.has(rowIndex)) {
                expandedRowsSetLocal.delete(rowIndex);
            } else {
                expandedRowsSetLocal.add(rowIndex);
            }
        } else {
            if (expandedRowsSetLocal.has(rowIndex)) {
                expandedRowsSetLocal.clear();
            } else {
                expandedRowsSetLocal.clear();
                expandedRowsSetLocal.add(rowIndex);
            }
        }
        setExpandedRowsSet(expandedRowsSetLocal);
    };

    return (
        <TableContainer component={Paper}>
            <MUITable stickyHeader={stickyHeader} size={size}>
                <TableHeader hasExpandableRows={hasExpandableRows} headerCells={headers} />
                {TableBody({
                    expandedRowsSet,
                    hasExpandableRows,
                    mainRowClassName,
                    bodyData,
                    toggleRowExpansion,
                })}
            </MUITable>
        </TableContainer>
    );
};
