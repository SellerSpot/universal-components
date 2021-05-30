import React, { ReactElement, useState } from 'react';
import { Table as MUITable } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import { TableBody } from './Components/TableBody';
import { TableHeader } from './Components/TableHeader';
import TableService from './Table.service';
import { ITableProps } from './Table.types';

export { ITableProps, ITableRow, ITableCell } from './Table.types';

export const Table = (props: ITableProps): ReactElement => {
    const {
        hasExpandableRows,
        multiExpandableRows,
        body,
        headers,
        stickyHeader,
        variant,
        size,
        unmountOnCollapse,
        maxHeight,
        height,
    } = props;

    // state "Set" to hold the expanded rows (if the rows can expand)
    const [expandedRows, setExpandedRows] = useState(new Set<number>());

    // handles the callback to toggleRowExpansion from user
    const toggleRowExpansion = (rowIndex: number) => {
        TableService.toggleRowExpansion({
            expandedRows,
            setExpandedRows,
            multiExpandableRows,
            rowIndex,
        });
    };
    // getting table body content
    const tableBody = body({ toggleRowExpansion });
    const tableContainerComponent = variant === 'simple' ? 'div' : Paper;
    const tableStyles: React.CSSProperties = {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        height:
            height ??
            TableService.computeTableContainerHeight({
                maxHeight,
                numberOfRows: tableBody.length,
                size,
            }),
    };

    return (
        <TableContainer component={tableContainerComponent} style={tableStyles}>
            <MUITable stickyHeader={stickyHeader} size={size}>
                {headers && <TableHeader hasExpandableRows={hasExpandableRows} headers={headers} />}
                {body && (
                    <TableBody
                        expandedRows={expandedRows}
                        variant={variant}
                        hasExpandableRows={hasExpandableRows}
                        tableBody={tableBody}
                        toggleRowExpansion={toggleRowExpansion}
                        unmountOnCollapse={unmountOnCollapse}
                    />
                )}
            </MUITable>
        </TableContainer>
    );
};
