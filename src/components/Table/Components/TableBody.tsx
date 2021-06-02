import { Collapse, TableBody as MUITableBody, TableCell, TableRow } from '@material-ui/core';
import React, { ReactElement, Fragment } from 'react';
import TableService from '../Table.service';
import { ITableProps, ITableRow } from '../Table.types';
import { CollapseTableIcon } from './CollapseTableIcon';
import styles from '../Table.module.scss';

const MainTableRow = (props: {
    rowIndex: number;
    numberOfRows: number;
    hasExpandableRows: boolean;
    variant: ITableProps['variant'];
    isRowExpanded: boolean;
    cells: ITableRow['cells'];
    toggleRowExpansion: (rowIndex: number) => void;
    onClick: ITableRow['onClick'];
}) => {
    const {
        cells,
        hasExpandableRows,
        isRowExpanded,
        rowIndex,
        numberOfRows,
        toggleRowExpansion,
        variant,
        onClick,
    } = props;
    // getting custom classes row style depending on if the table is expandable
    const mainRowClassName = TableService.getMainRowClassName({
        hasExpandableRows,
        numberOfRows,
        rowIndex,
        variant,
    });
    const tableCellClassName = hasExpandableRows ? null : styles.tableBodyCell;
    return (
        <TableRow onClick={onClick} className={mainRowClassName}>
            {hasExpandableRows ? (
                <TableCell key={'collapseIcon'} className={tableCellClassName}>
                    <CollapseTableIcon
                        isRowExpanded={isRowExpanded}
                        toggleRowExpansion={toggleRowExpansion}
                        rowIndex={rowIndex}
                    />
                </TableCell>
            ) : null}
            {cells.map((cell) => {
                const { content, align, colSpan, padding, rowSpan, width, key } = cell;
                return (
                    <TableCell
                        key={key}
                        className={tableCellClassName}
                        align={align}
                        colSpan={colSpan}
                        padding={padding}
                        rowSpan={rowSpan}
                        width={width}
                    >
                        {content}
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

const getCollapsedRow = (props: {
    cells: ITableRow['cells'];
    isRowExpanded: boolean;
    unmountOnCollapse: boolean;
    collapsedContent: ReactElement;
    key: string;
}) => {
    const { cells, isRowExpanded, unmountOnCollapse, collapsedContent, key } = props;
    // adding 1 to make up for the collapse icon cell
    const collapsedColSpan = cells.length + 1;
    const rowKey = `${key}collapsedRow`;
    const collapsedCellKey = `${key}collapsedCell`;
    return (
        <TableRow key={rowKey}>
            <TableCell
                key={collapsedCellKey}
                colSpan={collapsedColSpan}
                style={{ paddingBottom: 0, paddingTop: 0 }}
            >
                <Collapse in={isRowExpanded} timeout="auto" unmountOnExit={unmountOnCollapse}>
                    {collapsedContent}
                </Collapse>
            </TableCell>
        </TableRow>
    );
};

export const TableBody = (props: {
    tableBody: ITableRow[];
    expandedRows: Set<number>;
    variant: ITableProps['variant'];
    hasExpandableRows: boolean;
    toggleRowExpansion: (rowIndex: number) => void;
    unmountOnCollapse: boolean;
}): ReactElement => {
    const {
        tableBody,
        expandedRows,
        hasExpandableRows,
        toggleRowExpansion,
        variant,
        unmountOnCollapse,
    } = props;

    return (
        <MUITableBody>
            {tableBody.map((row, rowIndex) => {
                const { cells, collapsedContent, onClick, key } = row;
                const isRowExpanded = expandedRows.has(rowIndex);
                const rowWrapperKey = `${key}wrapper`;

                return (
                    <Fragment key={rowWrapperKey}>
                        <MainTableRow
                            cells={cells}
                            variant={variant}
                            numberOfRows={tableBody.length}
                            hasExpandableRows={hasExpandableRows}
                            isRowExpanded={isRowExpanded}
                            onClick={onClick}
                            rowIndex={rowIndex}
                            toggleRowExpansion={toggleRowExpansion}
                        />
                        {hasExpandableRows
                            ? getCollapsedRow({
                                  cells,
                                  collapsedContent,
                                  isRowExpanded,
                                  unmountOnCollapse,
                                  key,
                              })
                            : null}
                    </Fragment>
                );
            })}
        </MUITableBody>
    );
};
