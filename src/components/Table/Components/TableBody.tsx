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
    handleRowExpansion: () => void;
}) => {
    // props
    const { handleRowExpansion, isRowExpanded, mainRowClassName, rowKey } = props;

    // compute
    const iconToShow = isRowExpanded ? (
        <Icon icon={ICONS.keyboardArrowDown} />
    ) : (
        <Icon icon={ICONS.keyboardArrowUp} />
    );

    // draw
    return (
        <TableCell className={mainRowClassName} key={`${rowKey}expandRowIcon`} width="5%">
            <IconButton icon={iconToShow} theme="auto" onClick={handleRowExpansion} />
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
        <TableRow className={styles.bodyRow} key={`${rowKey}collapsedContent`}>
            <TableCell className={styles.collapsedCell} colSpan={collapsedContentCellWidth}>
                <Collapse in={isRowExpanded} timeout="auto">
                    {collapsedContentRenderer({
                        rowData,
                        rowIndex,
                    })}
                </Collapse>
            </TableCell>
            <hr className={styles.bodyDivider} />
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
                const mainRowCellClassName = cn(styles.bodyCell, {
                    [styles.bodyCellExpansibleTable]: hasCollapsedContent,
                });

                // handlers
                const rowOnClickHandler: TableRowProps['onClick'] = (event) => {
                    if (hasCollapsedContent) {
                        handleRowExpansion();
                    } else {
                        onRowClick({
                            event,
                            rowIndex,
                        });
                    }
                };

                // handlers
                const handleRowExpansion = () => {
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
                        <TableRow className={styles.bodyRow} onClick={rowOnClickHandler}>
                            {hasCollapsedContent ? (
                                <ExpandRowIcon
                                    mainRowClassName={mainRowCellClassName}
                                    rowKey={rowKey}
                                    isRowExpanded={isRowExpanded}
                                    handleRowExpansion={handleRowExpansion}
                                />
                            ) : null}
                            <MainTableCells
                                shape={shape}
                                rowIndex={rowIndex}
                                rowData={rowData}
                                mainRowClassName={mainRowCellClassName}
                            />
                            {hasCollapsedContent ? null : <hr className={styles.bodyDivider} />}
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
