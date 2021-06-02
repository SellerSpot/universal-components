import { useState } from '@hookstate/core';
import Icon from '@iconify/react';
import {
    Collapse,
    Table as MUITable,
    TableBody as MUITableBody,
    TableCell,
    TableHead as MUITableHead,
    TableRow,
    TableRowProps,
} from '@material-ui/core';
import cn from 'classnames';
import React, { Fragment, ReactElement } from 'react';
import { ICONS } from '../../utilities';
import { IconButton } from '../IconButton/IconButton';
import styles from './Table.module.scss';
import { ITableProps } from './Table.types';

export { ITableProps } from './Table.types';

const TableHead = (props: ITableProps) => {
    // props
    const { shape, collapsedContentRenderer } = props;

    // compute
    const hasCollapsedContent = !!collapsedContentRenderer;

    // draw
    return (
        <MUITableHead>
            <TableRow>
                {hasCollapsedContent ? <TableCell key={'expandRowIconColumn'} width="5%" /> : null}
                {shape.map((column, columnIndex) => {
                    // props
                    const { columnName, align, colSpan, padding, rowSpan, width } = column;

                    // compute
                    const cellKey = columnIndex;

                    // draw
                    return (
                        <TableCell
                            key={cellKey}
                            align={align}
                            padding={padding}
                            rowSpan={rowSpan}
                            width={width}
                            colSpan={colSpan}
                        >
                            {columnName}
                        </TableCell>
                    );
                })}
            </TableRow>
        </MUITableHead>
    );
};

const TableBody = (props: ITableProps) => {
    // props
    const {
        data,
        uniqueKey,
        shape,
        onRowClick,
        collapsedContentRenderer,
        multiRowExpansion = false,
    } = props;

    // state
    const expandedRows = useState<number[]>([]);

    // draw
    return (
        <MUITableBody>
            {data.map((rowData, rowIndex) => {
                // compute
                const rowKey = rowData[uniqueKey] ?? rowIndex;
                const lengthOfCellsForExpandRowIcon = 1;
                const collapsedContentCellWidth = data.length + lengthOfCellsForExpandRowIcon;
                const hasCollapsedContent = !!collapsedContentRenderer;
                const isRowExpanded = expandedRows.get().includes(rowIndex);
                const mainRowClassName = cn({
                    [styles.mainRowCellExpanded]: hasCollapsedContent,
                });

                // handlers
                const rowOnClickHandler: TableRowProps['onClick'] = (event) => {
                    onRowClick({
                        event,
                        rowIndex,
                    });
                };

                // handlers
                const handleExpandRowIconOnClick = () => {
                    if (isRowExpanded) {
                        if (multiRowExpansion) {
                            expandedRows.set((state) => {
                                const newState = state.filter((index) => index !== rowIndex);
                                return newState;
                            });
                        } else {
                            expandedRows.set([]);
                        }
                    } else {
                        if (multiRowExpansion) {
                            expandedRows.set((state) => {
                                const newState = [...state, rowIndex];
                                return newState;
                            });
                        } else {
                            expandedRows.set([rowIndex]);
                        }
                    }
                };

                // draw
                return (
                    <Fragment key={rowKey}>
                        <TableRow onClick={rowOnClickHandler}>
                            {hasCollapsedContent ? (
                                <TableCell
                                    className={mainRowClassName}
                                    key={`${rowKey}expandRowIcon`}
                                    width="5%"
                                >
                                    <IconButton
                                        icon={
                                            isRowExpanded ? (
                                                <Icon icon={ICONS.keyboardArrowDown} />
                                            ) : (
                                                <Icon icon={ICONS.keyboardArrowUp} />
                                            )
                                        }
                                        theme="auto"
                                        onClick={handleExpandRowIconOnClick}
                                    />
                                </TableCell>
                            ) : null}
                            {shape.map((column, columnIndex) => {
                                // props
                                const {
                                    customRenderer,
                                    dataKey,
                                    align,
                                    colSpan,
                                    padding,
                                    rowSpan,
                                    width,
                                } = column;

                                // compute
                                const cellContent =
                                    customRenderer?.({
                                        columnIndex,
                                        rowIndex,
                                        rowData,
                                    }) ?? rowData[dataKey];

                                // draw
                                return (
                                    <TableCell
                                        className={mainRowClassName}
                                        align={align}
                                        padding={padding}
                                        rowSpan={rowSpan}
                                        width={width}
                                        colSpan={colSpan}
                                        key={columnIndex}
                                    >
                                        {cellContent}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                        {hasCollapsedContent ? (
                            <TableRow key={`${rowKey}collapsedContent`}>
                                <TableCell
                                    className={styles.collapsedCell}
                                    colSpan={collapsedContentCellWidth}
                                >
                                    <Collapse in={isRowExpanded} timeout="auto">
                                        {collapsedContentRenderer({
                                            rowData,
                                            rowIndex,
                                        })}
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        ) : null}
                    </Fragment>
                );
            })}
        </MUITableBody>
    );
};

export const Table = (props: ITableProps): ReactElement => {
    // draw
    return (
        <div className={styles.tableWrapper}>
            <MUITable>
                <TableHead {...props} />
                <TableBody {...props} />
            </MUITable>
        </div>
    );
};
