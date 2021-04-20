import React, { Fragment, ReactElement } from 'react';
import {
    TableBody as MUITableBody,
    TableRow as MUITableRow,
    TableCell as MUITableCell,
} from '@material-ui/core';
import { ITableCell, ITableRow } from '../Table.types';
import { CollapsableTableIcon } from './CollapsableTableIcon';
import { CollapsableContentRow } from './CollapsableContentRow';

export interface ITableBodyProps {
    bodyData: ITableRow[];
    mainRowClassName: string;
    hasExpandableRows: boolean;
    expandedRowsSet: Set<number>;
    toggleRowExpansion: (rowIndex: number) => void;
}

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

export const TableBody = (props: ITableBodyProps): ReactElement => {
    const {
        bodyData,
        mainRowClassName,
        hasExpandableRows,
        expandedRowsSet,
        toggleRowExpansion,
    } = props;
    // compensation cell to make up for the collapse table icon
    const compensationExtraCell = hasExpandableRows ? 1 : 0;
    return (
        <MUITableBody>
            {bodyData.map((row, rowIndex) => {
                const { cells, collapsedContent, onClick } = row;
                // total table width to span the collapsable content cell
                const totalTableWidth = cells.length + compensationExtraCell;
                const shouldShowExpandableDiv = collapsedContent && hasExpandableRows;
                return (
                    <Fragment key={rowIndex}>
                        <MUITableRow className={mainRowClassName} onClick={onClick}>
                            {hasExpandableRows &&
                                CollapsableTableIcon({
                                    expandedRowsSet,
                                    rowIndex,
                                    toggleRowExpansion,
                                })}
                            {cells.map((cell, cellIndex) => {
                                return <TableCell key={cellIndex} cell={cell} />;
                            })}
                        </MUITableRow>
                        {shouldShowExpandableDiv &&
                            CollapsableContentRow({
                                collapsedContent: collapsedContent(toggleRowExpansion),
                                totalTableWidth,
                                rowIndex,
                                expandedRowsSet,
                            })}
                    </Fragment>
                );
            })}
        </MUITableBody>
    );
};
