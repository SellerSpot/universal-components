import React, { ReactElement, ReactNode, useState } from 'react';
import styles from './Table.module.scss';
import { ITableCell, ITableProps, ITableRow } from './Table.types';
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
import { IconButton } from '../IconButton/IconButton';
export { ITableProps, ITableCell, ITableRow } from './Table.types';

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
    // state set to hold the expanded rows (if the rows can expand)
    const [expandedRows, setExpandedRows] = useState(new Set<number>());
    // determining if the table has collapsable content
    let isTableCollapsable = false;
    body.map((row) => {
        if (!isUndefined(row.collapsedContent)) {
            isTableCollapsable = true;
            return;
        }
    });
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

    // handles click on table rows
    const handleRowClick = (
        event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
        rowIndex: number,
        onClick: ITableRow['onClick'],
    ) => {
        if (isTableCollapsable) {
            handleRowExpansionOrCollapsion(rowIndex);
        }
        if (!isUndefined(onClick)) {
            onClick(event);
        }
    };

    // holds the rotating icon for the expandable table
    const CollapsableTableIcon = (rowIndex: number) => {
        return (
            <MUITableCell key={'tableCollapsableIcon' + rowIndex} padding={'checkbox'}>
                <div
                    className={cn(styles.expandRowIcon, {
                        [styles.expandRowIconRotated]: expandedRows.has(rowIndex),
                    })}
                >
                    <IconButton
                        icon={<ICONS.MdKeyboardArrowDown />}
                        theme={'auto'}
                        size={'small'}
                        onClick={() => handleRowExpansionOrCollapsion(rowIndex)}
                    />
                </div>
            </MUITableCell>
        );
    };

    const CollapsableContentRow = (
        collapsedContent: ReactNode,
        totalTableOfCells: number,
        rowIndex: number,
    ) => {
        return (
            <MUITableRow key={'tableCollapsableRow' + rowIndex}>
                <MUITableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={totalTableOfCells}
                >
                    <Collapse in={expandedRows.has(rowIndex)}>{collapsedContent}</Collapse>
                </MUITableCell>
            </MUITableRow>
        );
    };

    // contructs the cells for the main table
    const TableCell = (cell: ITableCell, cellIndex: number) => {
        const { align, colSpan, content, padding, rowSpan, width } = cell;
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
    };

    // contructs each row for the table
    const TableRow = (row: ITableRow, rowIndex: number) => {
        const { cells, collapsedContent, onClick } = row;
        return (
            <React.Fragment key={'rowFragment' + rowIndex}>
                <MUITableRow
                    key={'tableRow' + rowIndex}
                    className={isTableCollapsable ? classes.root : null}
                    onClick={(event) => handleRowClick(event, rowIndex, onClick)}
                >
                    {isTableCollapsable ? CollapsableTableIcon(rowIndex) : null}
                    {cells.map((cell, cellIndex) => {
                        return TableCell(cell, cellIndex);
                    })}
                </MUITableRow>
                {isTableCollapsable
                    ? CollapsableContentRow(collapsedContent, cells.length + 1, rowIndex)
                    : null}
            </React.Fragment>
        );
    };

    // constructs the body for the table
    const tableBody = body.map((row, rowIndex) => {
        return TableRow(row, rowIndex);
    });

    // contructs the header for the main table
    const tableHeader = (
        <MUITableRow>
            {isTableCollapsable ? <MUITableCell key={'specialTableHeader'} width={'10%'} /> : null}
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
                <MUITableBody>{tableBody}</MUITableBody>
            </MUITable>
        </TableContainer>
    );
};
