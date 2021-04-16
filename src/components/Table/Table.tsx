import React, { ReactElement, useState } from 'react';
import styles from './Table.module.scss';
import { ITableCell, ITableProps } from './Table.types';
import {
    Collapse,
    makeStyles,
    Paper,
    Table as MUITable,
    TableBody as MUITableBody,
    TableCell as MUITableCell,
    TableContainer,
    TableHead as MUITableHead,
    TableRow as MUITableRow,
} from '@material-ui/core';
import { isUndefined } from 'lodash';
import { ICONS } from '../../utilities/icons';
import cn from 'classnames';
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
    const { body, headers, stickyHeader, size, multiExpandableRows } = props;
    const { rowData, collapsedContent } = body;
    // state set to hold the expanded rows (if the rows can expand)
    const [expandedRows, setExpandedRows] = useState(new Set<number>());
    // determining if the table has collapsable content
    const isTableCollapsable = !isUndefined(collapsedContent);
    // getting custom classes from rowStyles
    const classes = customRowStyles();

    // handles expanding or collapsing a table row
    const handleRowExpansionOrCollapsion = (rowIndex: number) => {
        // creating a new instance of the state to manipulate
        const expandedRowsLocal = new Set(expandedRows);
        if (multiExpandableRows) {
            if (expandedRowsLocal.has(rowIndex)) {
                expandedRowsLocal.delete(rowIndex);
            } else {
                expandedRowsLocal.add(rowIndex);
            }
        } else {
            if (expandedRowsLocal.has(rowIndex)) {
                expandedRowsLocal.clear();
            } else {
                expandedRowsLocal.clear();
                expandedRowsLocal.add(rowIndex);
            }
        }
        setExpandedRows(expandedRowsLocal);
    };

    // holds the rotating icon for the expandable table
    const CollapsableTableIcon = (rowIndex: number) => {
        return (
            <MUITableCell key={'tableCollapsableIcon' + rowIndex} padding={'none'}>
                <div
                    className={cn(styles.expandRowIcon, {
                        [styles.expandRowIconRotated]: expandedRows.has(rowIndex),
                    })}
                    onClick={() => handleRowExpansionOrCollapsion(rowIndex)}
                >
                    <ICONS.MdKeyboardArrowDown size={'24px'} />
                </div>
            </MUITableCell>
        );
    };

    const CollapsableContentRow = (row: ITableCell[], rowIndex: number) => {
        // spanning the entire row (1 is for the cell with the expand icon)
        const totalTableWidth = row.length + 1;
        return (
            <MUITableRow>
                <MUITableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={totalTableWidth}>
                    <Collapse in={expandedRows.has(rowIndex)} unmountOnExit>
                        {collapsedContent}
                    </Collapse>
                </MUITableCell>
            </MUITableRow>
        );
    };

    // contructs the cells for the main table
    const TableRowCells = (row: ITableCell[], rowIndex: number) => {
        return (
            <>
                {isTableCollapsable ? CollapsableTableIcon(rowIndex) : null}
                {row.map((cell, cellIndex) => {
                    const { align, content, padding, width, colSpan, rowSpan } = cell;
                    return (
                        <MUITableCell
                            key={'tableCell' + cellIndex}
                            align={align}
                            padding={padding}
                            width={width}
                            colSpan={colSpan}
                            rowSpan={rowSpan}
                        >
                            {content}
                        </MUITableCell>
                    );
                })}
            </>
        );
    };

    // contructs each row for the table
    const TableRow = (row: ITableCell[], rowIndex: number) => {
        return (
            <>
                <MUITableRow
                    className={isTableCollapsable ? classes.root : null}
                    key={'tableRow' + rowIndex}
                    onClick={() => {
                        isTableCollapsable ? handleRowExpansionOrCollapsion(rowIndex) : null;
                    }}
                >
                    {TableRowCells(row, rowIndex)}
                </MUITableRow>
                {isTableCollapsable ? CollapsableContentRow(row, rowIndex) : null}
            </>
        );
    };

    // constructs the body for the table
    const TableBody = rowData.map((row, rowIndex) => {
        return TableRow(row, rowIndex);
    });

    // contructs the header for the main table
    const tableHeader = (
        <MUITableRow>
            {isTableCollapsable ? <MUITableCell padding={'checkbox'} /> : null}
            {headers.map((header, index) => {
                return (
                    <MUITableCell
                        key={'tableHeader' + index}
                        padding={header.padding}
                        align={header.align}
                        width={header.width}
                    >
                        {header.content}
                    </MUITableCell>
                );
            })}
        </MUITableRow>
    );

    return (
        <TableContainer component={Paper}>
            <MUITable stickyHeader={stickyHeader} size={size}>
                <MUITableHead>{tableHeader}</MUITableHead>
                <MUITableBody>{TableBody}</MUITableBody>
            </MUITable>
        </TableContainer>
    );
};
