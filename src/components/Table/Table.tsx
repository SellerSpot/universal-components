import React, { ReactElement, useState } from 'react';
import { Table as MUITable, Paper, TableContainer } from '@material-ui/core';
import { TableHeader } from './components/TableHeader';
import { TableBody } from './components/TableBody';
import { ITableProps } from './Table.types';
import { TableService } from './Table.service';

export { ITableCell, ITableProps, ITableRow } from './Table.types';

export const Table = (props: ITableProps): ReactElement => {
    const {
        body: bodyData,
        headers,
        stickyHeader,
        size,
        multiExpandableRows,
        hasExpandableRows,
        unmountOnCollapse,
    } = props;
    // state set to hold the expanded rows (if the rows can expand)
    const [expandedRowsSet, setExpandedRowsSet] = useState(new Set<number>());
    // getting custom classes row style depending on if the table is expandable
    const mainRowClassName = hasExpandableRows ? TableService.customRowStyles().root : '';

    // handles the callback to toggleRowExpansion from user
    const handleRowExpansionCallback = (rowIndex: number) => {
        TableService.toggleRowExpansion({
            expandedRowsSet,
            setExpandedRowsSet,
            multiExpandableRows,
            rowIndex,
        });
    };

    return (
        <TableContainer component={Paper}>
            <MUITable stickyHeader={stickyHeader} size={size}>
                <TableHeader hasExpandableRows={hasExpandableRows} headerCells={headers} />
                <TableBody
                    unmountOnCollapse={unmountOnCollapse}
                    bodyData={bodyData({ toggleRowExpansion: handleRowExpansionCallback })}
                    expandedRowsSet={expandedRowsSet}
                    handleRowExpansionCallback={handleRowExpansionCallback}
                    hasExpandableRows={hasExpandableRows}
                    mainRowClassName={mainRowClassName}
                />
            </MUITable>
        </TableContainer>
    );
};
