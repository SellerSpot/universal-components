import { useState } from '@hookstate/core';
import Icon from '@iconify/react';
import {
    Collapse,
    TableBody as MUITableBody,
    TableCell,
    TableRow,
    TableRowProps,
} from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import cn from 'classnames';
import React, { Fragment, MouseEventHandler, ReactElement, useEffect } from 'react';
import { IconButton } from '../../..';
import { ICONS } from '../../../utilities/icons';
import { ITableProps } from '../Table';
import styles from '../Table.module.scss';

interface IDataCollection {
    rowKey: string;
    hasCollapsedContent: boolean;
    shape: ITableProps['shape'];
    mainRowCellClassName: string;
    rowIndex: number;
    rowData: ITableProps['data'][0];
    isRowExpanded: boolean;
    collapsedContentCellWidth: number;
    handleRowExpansion: (rowIndex: number) => void;
    toggleRowExpansion: (rowIndex: number) => void;
    collapsedContentRenderer: ITableProps['collapsedContentRenderer'];
}

const ExpandRowIcon = (props: { dataCollection: IDataCollection }) => {
    // props
    const { handleRowExpansion, isRowExpanded, mainRowCellClassName, rowKey, rowIndex } =
        props.dataCollection;

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

const MainTableCells = (props: { dataCollection: IDataCollection }) => {
    // props
    const { dataCollection } = props;
    const { mainRowCellClassName, rowData, shape, rowIndex, hasCollapsedContent, isRowExpanded } =
        dataCollection;

    // draw
    return (
        <>
            {shape.map((column, columnIndex) => {
                // props
                const {
                    dataKey,
                    align,
                    colSpan,
                    padding,
                    rowSpan,
                    width,
                    blockClickEventBubbling = false,
                    customRenderer,
                } = column;

                // handlers
                const blockClickEventBubblingHanlder: MouseEventHandler<HTMLTableHeaderCellElement> =
                    (event) => {
                        if (blockClickEventBubbling) event.stopPropagation();
                    };

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
                    {
                        [styles.bodyLastColumnCell]: columnIndex === shape.length - 1,
                    },
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
                        onClick={blockClickEventBubblingHanlder}
                    >
                        {cellContent}
                    </TableCell>
                );
            })}
        </>
    );
};

const CollapsedRow = (props: { dataCollection: IDataCollection; style: ITableProps['style'] }) => {
    // props
    const { style, dataCollection } = props;
    const {
        collapsedContentCellWidth,
        isRowExpanded,
        rowData,
        rowIndex,
        rowKey,
        toggleRowExpansion,
        collapsedContentRenderer,
    } = dataCollection;

    // styles
    const collapsedCellStyle = cn(styles.collapsedCell, {
        [styles.collapsedCellExpandedState]: isRowExpanded,
    });

    const rowStyle: CSSProperties = {
        backgroundColor: style?.collapsedRow?.backgroundColor ?? style?.bodyRow?.backgroundColor,
    };

    // draw
    return (
        <TableRow
            style={rowStyle}
            className={styles.collapsedRow}
            key={`${rowKey}collapsedContent`}
        >
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
        multiRowExpansion = false,
        style,
        onRowClick,
        collapsedContentRenderer,
    } = props;

    // state
    const expandedRows = useState<number[]>([]);

    // effects
    useEffect(() => {
        expandedRows.set([]);
    }, [data]);

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

    const tableRowStyle: CSSProperties = {
        backgroundColor: style?.bodyRow?.backgroundColor,
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
                        onRowClick?.({
                            event,
                            rowIndex,
                        });
                    }
                };

                // data collection
                const dataCollection: IDataCollection = {
                    rowKey,
                    toggleRowExpansion,
                    collapsedContentCellWidth,
                    hasCollapsedContent,
                    shape,
                    mainRowCellClassName,
                    handleRowExpansion: toggleRowExpansion,
                    rowData,
                    rowIndex,
                    collapsedContentRenderer,
                    isRowExpanded,
                };

                // draw
                return (
                    <Fragment key={rowKey}>
                        <TableRow
                            style={tableRowStyle}
                            className={mainRowClassName}
                            onClick={rowOnClickHandler}
                        >
                            {hasCollapsedContent ? (
                                <ExpandRowIcon dataCollection={dataCollection} />
                            ) : null}
                            <MainTableCells dataCollection={dataCollection} />
                        </TableRow>
                        {hasCollapsedContent ? (
                            <CollapsedRow dataCollection={dataCollection} style={style} />
                        ) : null}
                    </Fragment>
                );
            })}
        </MUITableBody>
    );
};
