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
    const { body, headers, stickyHeader, size } = props;
    const { rowData, collapsedContent } = body;
    // determining if the table has collapsable content
    const isTableCollapsable = !isUndefined(collapsedContent);
    // getting custom classes from rowStyles
    const classes = customRowStyles();

    // holds the rotating icon for the expandable table
    const CollapsableTableIcon = (
        rowIndex: number,
        expandRow: boolean,
        setExpandRow: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
        return (
            <MUITableCell key={'tableCollapsableIcon' + rowIndex} padding={'none'}>
                <div
                    className={cn(styles.expandRowIcon, {
                        [styles.expandRowIconRotated]: expandRow,
                    })}
                    onClick={() => setExpandRow(!expandRow)}
                >
                    <ICONS.MdKeyboardArrowDown size={'24px'} />
                </div>
            </MUITableCell>
        );
    };

    const CollapsableContentRow = (row: ITableCell[], expandRow: boolean) => {
        // spanning the entire row (1 is for the cell with the expand icon)
        const cellWidth = row.length + 1;
        return (
            <MUITableRow>
                <MUITableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={cellWidth}>
                    <Collapse in={expandRow} unmountOnExit>
                        {collapsedContent}
                    </Collapse>
                </MUITableCell>
            </MUITableRow>
        );
    };

    // contructs the cells for the main table
    const TableRowCells = (
        row: ITableCell[],
        rowIndex: number,
        expandRow: boolean,
        setExpandRow: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
        return (
            <>
                {isTableCollapsable
                    ? CollapsableTableIcon(rowIndex, expandRow, setExpandRow)
                    : null}
                {row.map((cell, cellIndex) => {
                    const { align, content, padding, width } = cell;
                    return (
                        <MUITableCell
                            key={'tableCell' + cellIndex}
                            align={align}
                            padding={padding}
                            width={width}
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
        const [expandRow, setExpandRow] = useState(false);
        return (
            <>
                <MUITableRow
                    className={isTableCollapsable ? classes.root : null}
                    key={'tableRow' + rowIndex}
                    onClick={() => {
                        isTableCollapsable ? setExpandRow(!expandRow) : null;
                    }}
                >
                    {TableRowCells(row, rowIndex, expandRow, setExpandRow)}
                </MUITableRow>
                {isTableCollapsable ? CollapsableContentRow(row, expandRow) : null}
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
