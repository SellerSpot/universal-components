import { useState } from '@hookstate/core';
import {
    Table as MUITable,
    TableCell,
    TableContainer,
    TableHead as MUITableHead,
    TableRow,
} from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
import React, { ReactElement, useEffect, useRef } from 'react';
import { TableBody } from './Components/TableBody';
import { TableEmptyState } from './Components/TableEmptyState/TableEmptyState';
import { TableSkeletonBody } from './Components/TableSkeletonBody';
import cn from 'classnames';
import styles from './Table.module.scss';
import { ITableProps } from './Table.types';
import Icon from '@iconify/react';
import { ICONS } from '../../utilities/icons';
import { IconButton } from '..';

export {
    ITableCollapsedCustomRenderer,
    ITableProps,
    TTableCellCustomRenderer,
} from './Table.types';

const TableHead = (props: ITableProps) => {
    // props
    const { shape, style, collapsedContentRenderer } = props;

    // compute
    const hasCollapsedContent = !!collapsedContentRenderer;

    const headerStyle: CSSProperties = {
        backgroundColor: style?.headerRow?.backgroundColor,
    };

    // draw
    return (
        <MUITableHead>
            <TableRow className={styles.headerRow}>
                {hasCollapsedContent ? (
                    <TableCell
                        className={cn(styles.headerCell, styles.headerFirstColumnCell)}
                        key={'expandRowIconColumn'}
                        width="5%"
                        style={headerStyle}
                    >
                        <IconButton
                            size="small"
                            icon={<Icon icon={ICONS.keyboardArrowDown} height="22px" />}
                            theme="dark"
                            disabled
                        />
                    </TableCell>
                ) : null}
                {shape.map((column, columnIndex) => {
                    // props
                    const { columnName, align, colSpan, padding, rowSpan, width } = column;

                    // compute
                    const cellKey = columnIndex;

                    // styles
                    const tableCellClassName = cn(styles.headerCell, {
                        [styles.headerFirstColumnCell]: !hasCollapsedContent && columnIndex == 0,
                        [styles.headerLastColumnCell]: columnIndex === shape.length - 1,
                    });

                    // draw
                    return (
                        <TableCell
                            className={tableCellClassName}
                            key={cellKey}
                            align={align}
                            padding={padding}
                            rowSpan={rowSpan}
                            width={width}
                            colSpan={colSpan}
                            style={headerStyle}
                        >
                            {columnName}
                        </TableCell>
                    );
                })}
            </TableRow>
        </MUITableHead>
    );
};

export const Table = (props: ITableProps): ReactElement => {
    // props
    const {
        size,
        isLoading,
        shape,
        data,
        emptyStateMessage,
        emptyStatePrimaryCallToAction,
        style,
        stickyHeader = true,
        collapsedContentRenderer,
    } = props;

    // state
    // table container height so that that skeleton can be properly sized
    const containerHeight = useState(400);

    // hooks
    // to help get the height of table parent
    const tableContainerRef = useRef<HTMLDivElement>(null);

    // effects
    // setting the table container height so that that skeleton can be properly sized
    useEffect(() => {
        if (tableContainerRef.current) {
            containerHeight.set(tableContainerRef.current.clientHeight);
        }
    }, []);

    // style
    const tableContainerStyle: CSSProperties = {
        maxHeight: containerHeight.get(),
    };

    // draw
    return (
        <div ref={tableContainerRef} className={styles.tableWrapper} style={style?.tableWrapper}>
            <TableContainer style={tableContainerStyle}>
                <MUITable size={size} stickyHeader={stickyHeader}>
                    <TableHead {...props} />
                    {isLoading ? (
                        <TableSkeletonBody
                            shape={shape}
                            tableContainerHeight={containerHeight.get()}
                            hasCollapsedContent={!!collapsedContentRenderer}
                        />
                    ) : (
                        <TableBody {...props} />
                    )}
                </MUITable>
            </TableContainer>
            {data?.length === 0 && !isLoading && (
                <TableEmptyState
                    message={emptyStateMessage}
                    primaryCallToAction={emptyStatePrimaryCallToAction}
                    tableContainerHeight={containerHeight.get()}
                />
            )}
        </div>
    );
};
