import { Collapse, TableBody as MUITableBody, TableCell, TableRow } from '@material-ui/core';
import React, { ReactElement } from 'react';
import TableService from '../Table.service';
import { ITableRow } from '../Table.types';
import { CollapseTableIcon } from './CollapseTableIcon';

const MainTableRow = (props: {
    rowIndex: number;
    numberOfRows: number;
    hasExpandableRows: boolean;
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
        onClick,
    } = props;
    // getting custom classes row style depending on if the table is expandable
    const mainRowClassName = TableService.getMainRowClassName({
        hasExpandableRows,
        numberOfRows,
        rowIndex,
    });
    return (
        <TableRow key={rowIndex} onClick={onClick} className={mainRowClassName}>
            {hasExpandableRows ? (
                <TableCell>
                    <CollapseTableIcon
                        isRowExpanded={isRowExpanded}
                        toggleRowExpansion={toggleRowExpansion}
                        rowIndex={rowIndex}
                    />
                </TableCell>
            ) : null}
            {cells.map((cell, cellIndex) => {
                const { content, align, colSpan, padding, rowSpan, width } = cell;
                return (
                    <TableCell
                        key={cellIndex}
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
}) => {
    const { cells, isRowExpanded, unmountOnCollapse, collapsedContent } = props;
    return (
        <TableRow>
            <TableCell colSpan={cells.length + 1} style={{ paddingBottom: 0, paddingTop: 0 }}>
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
    hasExpandableRows: boolean;
    toggleRowExpansion: (rowIndex: number) => void;
    unmountOnCollapse: boolean;
}): ReactElement => {
    const {
        tableBody,
        expandedRows,
        hasExpandableRows,
        toggleRowExpansion,
        unmountOnCollapse,
    } = props;

    return (
        <MUITableBody>
            {tableBody.map((row, rowIndex) => {
                const { cells, collapsedContent, onClick } = row;
                const isRowExpanded = expandedRows.has(rowIndex);
                return (
                    <>
                        <MainTableRow
                            cells={cells}
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
                              })
                            : null}
                    </>
                );
            })}
        </MUITableBody>
    );
};
