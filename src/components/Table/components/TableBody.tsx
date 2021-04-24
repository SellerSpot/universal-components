import React, { Fragment, ReactElement } from 'react';
import {
    TableBody as MUITableBody,
    TableCell as MUITableCell,
    TableRow as MUITableRow,
} from '@material-ui/core';
import { CollapsableTableIcon } from './CollapsableTableIcon';
import { CollapsableContentRow } from './CollapsableContentRow';
import { ITableBodyProps, ITableCell } from '../Table.types';

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
        unmountOnCollapse,
        handleRowExpansionCallback,
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
                        <MUITableRow
                            id={`${rowIndex}`}
                            className={mainRowClassName}
                            onClick={onClick}
                        >
                            {hasExpandableRows && (
                                <CollapsableTableIcon
                                    expandedRowsSet={expandedRowsSet}
                                    handleRowExpansionCallback={handleRowExpansionCallback}
                                    rowIndex={rowIndex}
                                />
                            )}
                            {cells.map((cell, cellIndex) => {
                                return <TableCell key={cellIndex} cell={cell} />;
                            })}
                        </MUITableRow>
                        {shouldShowExpandableDiv && (
                            <CollapsableContentRow
                                unmountOnCollapse={unmountOnCollapse}
                                collapsedContent={collapsedContent}
                                expandedRowsSet={expandedRowsSet}
                                rowIndex={rowIndex}
                                totalTableWidth={totalTableWidth}
                            />
                        )}
                    </Fragment>
                );
            })}
        </MUITableBody>
    );
};
