import { useState } from '@hookstate/core';
import Icon from '@iconify/react';
import {
    Collapse,
    TableBody as MUITableBody,
    TableCell,
    TableRow,
    TableRowProps,
} from '@material-ui/core';
import cn from 'classnames';
import React, { Fragment, ReactElement } from 'react';
import { IconButton, ICONS } from '../../..';
import { ITableProps } from '../Table';
import styles from '../Table.module.scss';

const ExpandRowIcon = (props: {
    mainRowClassName: string;
    rowKey: string;
    isRowExpanded: boolean;
    handleExpandRowIconOnClick: () => void;
}) => {
    // props
    const { handleExpandRowIconOnClick, isRowExpanded, mainRowClassName, rowKey } = props;

    // compute
    const iconToShow = isRowExpanded ? (
        <Icon icon={ICONS.keyboardArrowDown} />
    ) : (
        <Icon icon={ICONS.keyboardArrowUp} />
    );

    // draw
    return (
        <TableCell className={mainRowClassName} key={`${rowKey}expandRowIcon`} width="5%">
            <IconButton icon={iconToShow} theme="auto" onClick={handleExpandRowIconOnClick} />
        </TableCell>
    );
};

const MainTableCells = (props: {
    shape: ITableProps['shape'];
    mainRowClassName: string;
    rowIndex: number;
    rowData: ITableProps['data'][0];
}) => {
    // props
    const { mainRowClassName, rowData, shape, rowIndex } = props;

    // draw
    return (
        <>
            {shape.map((column, columnIndex) => {
                // props
                const { customRenderer, dataKey, align, colSpan, padding, rowSpan, width } = column;

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
        </>
    );
};

const CollapsedRow = (props: {
    rowKey: string;
    collapsedContentCellWidth: number;
    rowData: ITableProps['data'][0];
    rowIndex: number;
    collapsedContentRenderer: ITableProps['collapsedContentRenderer'];
    isRowExpanded: boolean;
}) => {
    // props
    const {
        collapsedContentCellWidth,
        collapsedContentRenderer,
        isRowExpanded,
        rowData,
        rowIndex,
        rowKey,
    } = props;

    // draw
    return (
        <TableRow className={styles.collapsedContentRow} key={`${rowKey}collapsedContent`}>
            <TableCell className={styles.collapsedCell} colSpan={collapsedContentCellWidth}>
                <Collapse in={isRowExpanded} timeout="auto">
                    {collapsedContentRenderer({
                        rowData,
                        rowIndex,
                    })}
                </Collapse>
            </TableCell>
            <hr className={styles.divider} />
        </TableRow>
    );
};

export const TableBody = (props: ITableProps): ReactElement => {
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
                const collapsedContentCellWidth = shape.length + lengthOfCellsForExpandRowIcon;
                const hasCollapsedContent = !!collapsedContentRenderer;
                const isRowExpanded = expandedRows.get().includes(rowIndex);
                const mainRowCellClassName = cn(styles.mainRowCell, {
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
                        <TableRow className={styles.mainContentRow} onClick={rowOnClickHandler}>
                            {hasCollapsedContent ? (
                                <ExpandRowIcon
                                    mainRowClassName={mainRowCellClassName}
                                    rowKey={rowKey}
                                    isRowExpanded={isRowExpanded}
                                    handleExpandRowIconOnClick={handleExpandRowIconOnClick}
                                />
                            ) : null}
                            <MainTableCells
                                shape={shape}
                                rowIndex={rowIndex}
                                rowData={rowData}
                                mainRowClassName={mainRowCellClassName}
                            />
                            {hasCollapsedContent ? null : <hr className={styles.divider} />}
                        </TableRow>
                        {hasCollapsedContent ? (
                            <CollapsedRow
                                rowKey={rowKey}
                                collapsedContentCellWidth={collapsedContentCellWidth}
                                rowData={rowData}
                                rowIndex={rowIndex}
                                collapsedContentRenderer={collapsedContentRenderer}
                                isRowExpanded={isRowExpanded}
                            />
                        ) : null}
                    </Fragment>
                );
            })}
        </MUITableBody>
    );
};
