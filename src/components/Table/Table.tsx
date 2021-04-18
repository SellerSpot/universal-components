import React, { ReactElement, ReactNode, useState, Fragment } from 'react';
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
    const { body, headers, stickyHeader, size, multiExpandableRows, hasExpandableRows } = props;
    // state set to hold the expanded rows (if the rows can expand)
    const [expandedRows, setExpandedRows] = useState(new Set<number>());
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
        if (hasExpandableRows) {
            handleRowExpansionOrCollapsion(rowIndex);
        }
        if (!isUndefined(onClick)) {
            onClick(event);
        }
    };

    // holds the rotating icon for the expandable table
    const CollapsableTableIcon = (props: { rowIndex: number }) => {
        const { rowIndex } = props;
        return (
            <MUITableCell padding={'checkbox'}>
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

    const CollapsableContentRow = (props: {
        collapsedContent: ReactNode;
        totalTableWidth: number;
        rowIndex: number;
    }) => {
        const { collapsedContent, rowIndex, totalTableWidth } = props;
        return (
            <MUITableRow>
                <MUITableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={totalTableWidth}>
                    <Collapse in={expandedRows.has(rowIndex)}>{collapsedContent}</Collapse>
                </MUITableCell>
            </MUITableRow>
        );
    };

    // contructs the cells for the main table
    const TableCell = (props: { cell: ITableCell }) => {
        const { cell } = props;
        const { align, colSpan, content, padding, rowSpan, width } = cell;
        return (
            <MUITableCell
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
    const TableRow = (props: { row: ITableRow; rowIndex: number }) => {
        const { row, rowIndex } = props;
        const { cells, collapsedContent, onClick } = row;
        // extra cell count to compensate for the expand row icon cell
        const compensationExtraCell = hasExpandableRows ? 1 : 0;
        const totalTableWidth = cells.length + compensationExtraCell;
        const tableRowOnClickHandler: ITableRow['onClick'] = (event) =>
            handleRowClick(event, rowIndex, onClick);
        const defaultRowClassName = hasExpandableRows ? classes.root : '';
        return (
            <>
                <MUITableRow className={defaultRowClassName} onClick={tableRowOnClickHandler}>
                    {hasExpandableRows && <CollapsableTableIcon rowIndex={rowIndex} />}
                    {cells.map((cell, cellIndex) => {
                        return <TableCell key={cellIndex} cell={cell} />;
                    })}
                </MUITableRow>
                {CollapsableContentRow({
                    collapsedContent: collapsedContent,
                    totalTableWidth: totalTableWidth,
                    rowIndex: rowIndex,
                })}
            </>
        );
    };

    // constructs the body for the table
    const TableBody = (): ReactElement => {
        return (
            <>
                {body.map((row, rowIndex) => {
                    return (
                        <Fragment key={rowIndex}>
                            {TableRow({
                                row: row,
                                rowIndex: rowIndex,
                            })}
                        </Fragment>
                    );
                })}
            </>
        );
    };

    // contructs the header for the main table
    const TableHeader = () => {
        return (
            <MUITableRow>
                {hasExpandableRows && <MUITableCell width={'10%'} />}
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
    };

    return (
        <TableContainer component={Paper}>
            <MUITable stickyHeader={stickyHeader} size={size}>
                <MUITableHead>
                    <TableHeader />
                </MUITableHead>
                <MUITableBody>{TableBody()}</MUITableBody>
            </MUITable>
        </TableContainer>
    );
};
