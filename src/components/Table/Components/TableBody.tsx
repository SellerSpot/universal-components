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
    rowIndex: number;
    handleRowExpansion: (rowIndex: number) => void;
}) => {
    // props
    const { handleRowExpansion, isRowExpanded, mainRowClassName, rowKey, rowIndex } = props;

    // compute
    const iconToShow = isRowExpanded ? ICONS.keyboardArrowDown : ICONS.keyboardArrowUp;

    // handlers
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        handleRowExpansion(rowIndex);
    };

    // draw
    return (
        <TableCell className={mainRowClassName} key={`${rowKey}expandRowIcon`} width="5%">
            <IconButton
                size="small"
                icon={<Icon icon={iconToShow} height="22px" />}
                theme="auto"
                onClick={onClickHandler}
            />
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
    toggleRowExpansion: (rowIndex: number) => void;
    collapsedContentRenderer: ITableProps['collapsedContentRenderer'];
    isRowExpanded: boolean;
}) => {
    // props
    const {
        collapsedContentCellWidth,
        collapsedContentRenderer,
        isRowExpanded,
        toggleRowExpansion,
        rowData,
        rowIndex,
        rowKey,
    } = props;

    // draw
    return (
        <TableRow className={styles.collapsedRow} key={`${rowKey}collapsedContent`}>
            <TableCell className={styles.collapsedCell} colSpan={collapsedContentCellWidth}>
                <Collapse in={isRowExpanded} timeout="auto" unmountOnExit={true}>
                    {collapsedContentRenderer({
                        rowData,
                        rowIndex,
                        toggleRowExpansion,
                    })}
                </Collapse>
            </TableCell>
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

    // handlers
    const toggleRowExpansion = (rowIndex: number) => {
        const isRowExpanded = expandedRows.get().includes(rowIndex);
        debugger;
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
        <MUITableBody>
            {data.map((rowData, rowIndex) => {
                // compute
                const rowKey = rowData[uniqueKey] ?? rowIndex;
                const lengthOfCellsForExpandRowIcon = 1;
                const collapsedContentCellWidth = shape.length + lengthOfCellsForExpandRowIcon;
                const hasCollapsedContent = !!collapsedContentRenderer;
                const isRowExpanded = expandedRows.get().includes(rowIndex);
                const mainRowClassName = cn(styles.bodyRow, {
                    [styles.bodyRowExpandableTable]: hasCollapsedContent,
                });
                const mainRowCellClassName = cn(styles.bodyCell, {
                    [styles.bodyCellExpansibleTable]: hasCollapsedContent,
                });

                // handlers
                const rowOnClickHandler: TableRowProps['onClick'] = (event) => {
                    if (hasCollapsedContent) {
                        toggleRowExpansion(rowIndex);
                    } else {
                        onRowClick({
                            event,
                            rowIndex,
                        });
                    }
                };

                // draw
                return (
                    <Fragment key={rowKey}>
                        <TableRow className={mainRowClassName} onClick={rowOnClickHandler}>
                            {hasCollapsedContent ? (
                                <ExpandRowIcon
                                    mainRowClassName={mainRowCellClassName}
                                    rowKey={rowKey}
                                    isRowExpanded={isRowExpanded}
                                    handleRowExpansion={toggleRowExpansion}
                                    rowIndex={rowIndex}
                                />
                            ) : null}
                            <MainTableCells
                                shape={shape}
                                rowIndex={rowIndex}
                                rowData={rowData}
                                mainRowClassName={mainRowCellClassName}
                            />
                            {hasCollapsedContent ? null : <div className={styles.bodyDivider} />}
                        </TableRow>
                        {hasCollapsedContent ? (
                            <CollapsedRow
                                rowKey={rowKey}
                                toggleRowExpansion={toggleRowExpansion}
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
