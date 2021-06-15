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
import { IconButton } from '../../..';
import { ICONS } from '../../../utilities/icons';
import { ITableProps } from '../Table';
import styles from '../Table.module.scss';

const ExpandRowIcon = (props: {
    mainRowCellClassName: string;
    rowKey: string;
    isRowExpanded: boolean;
    rowIndex: number;
    handleRowExpansion: (rowIndex: number) => void;
}) => {
    // props
    const { handleRowExpansion, isRowExpanded, mainRowCellClassName, rowKey, rowIndex } = props;

    // compute
    const iconToShow = isRowExpanded ? ICONS.keyboardArrowUp : ICONS.keyboardArrowDown;

    // handlers
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        handleRowExpansion(rowIndex);
    };

    // styles
    const tableCellClassName = cn(mainRowCellClassName, styles.bodyFirstColumnCell, {
        [styles.bodyCellWithTableExpanded]: !isRowExpanded,
    });

    // draw
    return (
        <TableCell className={tableCellClassName} key={`${rowKey}expandRowIcon`} width="5%">
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
    hasCollapsedContent: boolean;
    shape: ITableProps['shape'];
    mainRowCellClassName: string;
    rowIndex: number;
    rowData: ITableProps['data'][0];
    isRowExpanded: boolean;
}) => {
    // props
    const { mainRowCellClassName, rowData, shape, rowIndex, hasCollapsedContent, isRowExpanded } =
        props;

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

                // styles
                const tableCellClassName = cn(
                    mainRowCellClassName,
                    {
                        [styles.bodyFirstColumnCell]: !hasCollapsedContent && columnIndex === 0,
                    },
                    { [styles.bodyCellWithTableExpanded]: !isRowExpanded && hasCollapsedContent },
                );

                // draw
                return (
                    <TableCell
                        className={tableCellClassName}
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

    // styles
    const collapsedCellStyle = cn(styles.collapsedCell, {
        [styles.collapsedCellExpandedState]: isRowExpanded,
    });

    // draw
    return (
        <TableRow className={styles.collapsedRow} key={`${rowKey}collapsedContent`}>
            <TableCell className={collapsedCellStyle} colSpan={collapsedContentCellWidth}>
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
                const mainRowClassName = cn(styles.bodyRow);
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
                        <TableRow hover className={mainRowClassName} onClick={rowOnClickHandler}>
                            {hasCollapsedContent ? (
                                <ExpandRowIcon
                                    mainRowCellClassName={mainRowCellClassName}
                                    rowKey={rowKey}
                                    isRowExpanded={isRowExpanded}
                                    handleRowExpansion={toggleRowExpansion}
                                    rowIndex={rowIndex}
                                />
                            ) : null}
                            <MainTableCells
                                isRowExpanded={isRowExpanded}
                                hasCollapsedContent={hasCollapsedContent}
                                shape={shape}
                                rowIndex={rowIndex}
                                rowData={rowData}
                                mainRowCellClassName={mainRowCellClassName}
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
